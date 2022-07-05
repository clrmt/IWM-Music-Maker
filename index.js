var pitchBegin = 17;
var pitchEnd = 68;
var pitchWidth = 20;
var pitchHeight = 80;
var pitchBlackHeight = 50;
var pitchHalfWidth = Math.round(pitchWidth * 0.5);
var pitchLeft = 36;

var inputBeat = 24;
var inputValueUp = 1;
var inputValueDown = 4;

// 키보드
var shiftDown = false;
var ctrlDown = false;

// 커서
var cursorMode = 0; // 0:none, 1: row, 2:cell
var cursorIndex = 0;
var cursorPitch = 0;

var musicTimer = null;
var musicHighlightElement = null;

var repeatInsertionTimer = null;

function startRepeatInsertion(elem){

	noteList.insertAfter(elem);
	repeatInsertionTimer = setTimeout(function(){
		startRepeatInsertion(elem);
	}, 50);

}

// 한 번만 생성, 사운드 관리
function SoundManager(){
	let loadBegin = 12; // C0.mp3
	let loadEnd = 72; // C8.mp3

	this.toIWMPitch = [];
	for(let i=0;i<100;i++){
		this.toIWMPitch.push("");
	}
	let cPitch = 1.0;
	for(let i=48;i<window.pitchEnd;i++){
		this.toIWMPitch[i] = Math.round(cPitch * 10000) / 10000;
		cPitch *= 1.0594630943593;
	}
	cPitch = 1.0;
	for(let i=48;i>=window.pitchBegin;i--){
		this.toIWMPitch[i] = Math.round(cPitch * 10000) / 10000;
		cPitch /= 1.0594630943593;
	}
	// 위의 모든 경우에서 1.005와 같은 수가 등장하기 않기 때문에 굳이 + EPSILON 할 필요 없음
	// Math.round((num + Number.EPSILON) * 100) / 100

	this.list = [];

	for(let i=0;i<loadBegin;i++){
		this.list.push(undefined);
	}
	for(let i=loadBegin;i<loadEnd;i++){
		let octave = Math.floor(i / 12) + 1;
		let fileName = '';

		if(i % 12 == 0){
			fileName += 'C';
			fileName += octave.toString(10);
		}
		if(i % 12 == 1){
			fileName += 'Db';
			fileName += octave.toString(10);
		}
		if(i % 12 == 2){
			fileName += 'D';
			fileName += octave.toString(10);
		}
		if(i % 12 == 3){
			fileName += 'Eb';
			fileName += octave.toString(10);
		}
		if(i % 12 == 4){
			fileName += 'E';
			fileName += octave.toString(10);
		}
		if(i % 12 == 5){
			fileName += 'F';
			fileName += octave.toString(10);
		}
		if(i % 12 == 6){
			fileName += 'Gb';
			fileName += octave.toString(10);
		}
		if(i % 12 == 7){
			fileName += 'G';
			fileName += octave.toString(10);
		}
		if(i % 12 == 8){
			fileName += 'Ab';
			fileName += octave.toString(10);
		}
		if(i % 12 == 9){
			fileName += 'A';
			fileName += octave.toString(10);
		}
		if(i % 12 == 10){
			fileName += 'Bb';
			fileName += octave.toString(10);
		}
		if(i % 12 == 11){
			fileName += 'B';
			fileName += octave.toString(10);
		}

		let cAudio = new Audio('piano-mp3/' + fileName + '.mp3');
		this.list.push(cAudio);
	}
	this.play = function(pitch){
		this.list[pitch].currentTime = 0;
		this.list[pitch].play();
	}
}

function Pitch(){
	this.toNumber = function(){

	}
}
Pitch.toPitch = function(){

}

function Note(){
	this.valueUp = window.inputValueUp; // 분자
	this.valueDown = window.inputValueDown; // 분모
	this.selected = false;
	this.pitch = [];
	this.pitchSelected = [];
	for(let i=0;i<100;i++){
		let v = {};
		v.piano = false;
		v.guitar = false;
		this.pitch.push(v);
		this.pitchSelected.push(false);
	}
}
Note.prototype.deepCopy = function(){
	let cNote = new Note();
	cNote.valueUp = this.valueUp;
	cNote.valueDown = this.valueDown;
	for(let i=window.pitchBegin;i<window.pitchEnd;i++){
		cNote.pitch[i].piano = this.pitch[i].piano;
	}
	return cNote;
}

// 한 번만 로드되는 클래스
function NoteList(){

	// index 넘버링 다시
	this.number = function(){
		let i = 0;
		let j = document.getElementById('NoteList').firstElementChild;
		while(i < this.list.length){
			j.setAttribute('index', i.toString(10));
			i++;
			j = j.nextElementSibling;
		}
	}

	// 특정 elem 다음에 빈 노트 추가
	this.insertAfter = function(elem){
		if(window.unloadEventCheck == 0){
			window.unloadEventCheck = 1;
			window.addEventListener('beforeunload', function(evt){
				evt.preventDefault();
				evt.returnValue = '';
			});
		}
		idx = parseInt(elem.getAttribute('index'));
		if(this.list.length - 1 == idx){
			this.list.push(new Note());
		} else {
			this.list.splice(idx + 1, 0, new Note());
		}
		var newNode = this.createNoteElement(idx + 1);
		elem.insertAfter(newNode);
		this.number();
	}

	this.deleteSelected = function(){
		
		let parent = document.getElementById('NoteList');
		let child = parent.firstElementChild;
		let tempChild = null;
		
		for(let i=0;i<this.list.length;i++){
			if(this.list[i].selected){
				tempChild = child;
				this.list.splice(i, 1);
				i--;
			}
			child = child.nextElementSibling;
			if(tempChild != null){
				parent.removeChild(tempChild);
				tempChild = null;
			}
		}

		if(this.list.length == 0){
			this.reset();
		} else{
			this.number();
		}
		noteList.unselectAllRow();
	}
	
	// 해당 element를 누르면(cell 선택)
	this.select = function(elem){
		let pitch = parseInt(elem.getAttribute('pitch'));
		let index = parseInt(elem.parentNode.parentNode.getAttribute('index'));
		if(window.toggleCheck.checked == true){
			if(window.pianoCheck.checked){
				noteList.list[index].pitch[pitch].piano = !noteList.list[index].pitch[pitch].piano;
			}
			if(window.guitarCheck.checked){
				noteList.list[index].pitch[pitch].guitar = !noteList.list[index].pitch[pitch].guitar;
			}
		} else {
			noteList.list[index].pitch[pitch].piano = window.pianoCheck.checked;
			noteList.list[index].pitch[pitch].guitar = window.guitarCheck.checked;
		}
		
		this.color(elem, true);
	}

	// row 선택
	this.selectRow = function(elem){
		noteList.stopMusic();
		let index = parseInt(elem.parentNode.getAttribute('index'));
		if(window.cursorMode == 0){ // none
			window.cursorIndex = index;
			window.cursorMode = 1;
			noteList.list[index].selected = true;
			elem.previousElementSibling.style.border = "1px solid #ff0000";
		} else if(window.cursorMode == 1){ // row
			if(window.shiftDown && !window.ctrlDown){ // shift만
				let lowerIndex;
				let upperIndex;
				if(window.cursorIndex < index){
					lowerIndex = window.cursorIndex;
					upperIndex = index;
				} else{
					lowerIndex = index;
					upperIndex = window.cursorIndex;
				}
				for(let i=lowerIndex;i<=upperIndex;i++){
					document.getElementById('NoteList').children[i].children[1].style.border = "1px solid #ff0000";
					noteList.list[i].selected = true;
				}
			}
			if(!window.shiftDown && window.ctrlDown){ // ctrl만
				window.cursorIndex = index;
				if(noteList.list[index].selected == false){
					noteList.list[index].selected = true;
					elem.previousElementSibling.style.border = "1px solid #ff0000";
				} else{
					noteList.list[index].selected = false;
					elem.previousElementSibling.style.border = "1px solid #ffffff";
				}
				
			}
			if(!window.shiftDown && !window.ctrlDown){ // shift, ctrl 아무것도 안 눌림
				noteList.unselectAllRow();
				window.cursorIndex = index;
				noteList.list[index].selected = true;
				elem.previousElementSibling.style.border = "1px solid #ff0000";
			}
		} else if(window.cursorMode == 2){ // cell
			noteList.unselectAllCell();
			window.cursorIndex = index;
			window.cursorMode = 1;
			noteList.list[index].selected = true;
			elem.previousElementSibling.style.border = "1px solid #ff0000";
		}

		noteList.checkSelected();

	}

	// Ctrl + A
	this.selectAllRow = function(){
		
		let elem = document.getElementById('NoteList').firstElementChild;

		window.cursorMode = 1;
		for(let i=0;i<noteList.list.length;i++){
			noteList.list[i].selected = true;
			elem.children[1].style.border = '1px solid #ff0000';
			elem = elem.nextElementSibling;
		}

		noteList.checkSelected();

	}
	
	// 개수 세고, 수정 준비
	this.checkSelected = function(){
		
		let selectedNumber = 0;

		let valueUp = -1;
		let valueDown = -1;

		for(let i=0;i<noteList.list.length;i++){
			if(noteList.list[i].selected == true){
				selectedNumber++;
				if(valueUp == -1){
					valueUp = noteList.list[i].valueUp;
					valueDown = noteList.list[i].valueDown;
				} else if(valueUp == noteList.list[i].valueUp && valueDown == noteList.list[i].valueDown){

				} else{
					valueUp = -2;
				}
			}
		}

		document.getElementById('SelectedNumber').innerText = selectedNumber;
		let editElements = document.getElementsByClassName('PropertySelected');

		for(let i=0;i<editElements.length;i++){
			if(selectedNumber == 0){
				editElements[i].disabled = true;
				document.getElementById('SelectedValueUp').value = '';
				document.getElementById('SelectedValueDown').value = '';
			} else {
				editElements[i].disabled = false;
				if(valueUp > 0){
					document.getElementById('SelectedValueUp').value = valueUp;
					document.getElementById('SelectedValueDown').value = valueDown;
				} else{
					document.getElementById('SelectedValueUp').value = '';
					document.getElementById('SelectedValueDown').value = '';
				}
			}
		}
		
	}
	
	this.apply = function(){

		let valueUp = parseInt(document.getElementById('SelectedValueUp').value);
		let valueDown = parseInt(document.getElementById('SelectedValueDown').value);

		if(isNaN(valueUp) || isNaN(valueDown) || valueUp <= 0 || valueDown <= 0){
			return;
		}

		let e = document.getElementById('NoteList').firstElementChild;
		
		for(let i=0;i<noteList.list.length;i++){
			if(noteList.list[i].selected == true){
				noteList.list[i].valueUp = valueUp;
				noteList.list[i].valueDown = valueDown;
				let eNoteHeight = 96 * valueUp / valueDown;
				if(eNoteHeight < 12){
					eNoteHeight = 12;
				}
				if(eNoteHeight > 192){
					eNoteHeight = 192;
				}
				
				let ee = e.children[1].children;
				for(let j=0;j<ee.length;j++){
					ee[j].style.height = eNoteHeight + 'px';
				}
			}
			e = e.nextElementSibling;
		}
	}
	this.copy = function(){
		let e = document.getElementById('NoteList').firstElementChild;
		noteList.clipboard = [];
		
		for(let i=0;i<noteList.list.length;i++){
			if(noteList.list[i].selected == true){
				let newNote = new Note();

				newNote.valueUp = noteList.list[i].valueUp;
				newNote.valueDown = noteList.list[i].valueDown;
				
				for(let j=0;j<100;j++){
					newNote.pitch[j] = noteList.list[i].pitch[j];
				}
				noteList.clipboard.push(newNote);
			}
		}
	}
	this.cut = function(){
		this.copy();
		this.deleteSelected();
	}
	this.clear = function(){
		let e = document.getElementById('NoteList').firstElementChild;
		
		for(let i=0;i<noteList.list.length;i++){
			if(noteList.list[i].selected == true){
				for(let j=window.pitchBegin;j<window.pitchEnd;j++){
					if(noteList.list[i].pitch[j].piano == true){
						noteList.list[i].pitch[j].piano = false;
						this.color(e.children[1].children[j - window.pitchBegin], false);
					}
				}
			}
			e = e.nextElementSibling;
		}
	}

	this.unselectAllRow = function(){

		let elem = document.getElementById('NoteList').firstElementChild;

		for(let i=0;i<noteList.list.length;i++){
			noteList.list[i].selected = false;
			elem.children[1].style.border = '1px solid #ffffff';
			elem.children[2].innerText = '○';
			elem = elem.nextElementSibling;
		}

		noteList.checkSelected();
		
	}

	this.unselectAllCell = function(){

	}

	// 인덱스 번호에 해당하는 element 객체 생성 후 그 노트 element를 반환
	this.createNoteElement = function(idx){
		let eNote = document.createElement('div');
		eNote.style.clear='left';

		let eNoteHeight = 96 * window.inputValueUp / window.inputValueDown;
		if(idx < this.list.length){
			eNoteHeight = 96 * this.list[idx].valueUp / this.list[idx].valueDown;
		}
		
		if(eNoteHeight < 12){
			eNoteHeight = 12;
		}
		if(eNoteHeight > 192){
			eNoteHeight = 192;
		}

		eNote.setAttribute('index', idx.toString(10));

		// 왼쪽 컨트롤 e
		let e = document.createElement('div');
		e.style.float = 'left';
		e.style.width = window.pitchLeft + 'px';

		eMiniControl = document.createElement('div');
		eMiniControl.style.float = 'left';
		eMiniControl.innerText = '　↓';
		eMiniControl.title = 'click:insert below, keep press:repeat insertion';
		eMiniControl.style.fontSize = 'smaller';
		eMiniControl.style.cursor = 'pointer';
		(function (){
			let eNote_ = eNote;
			eMiniControl.addEventListener('click', function(evt){
				noteList.insertAfter(eNote_);
				evt.stopPropagation();
			});
		})();
		(function (){
			let eNote_ = eNote;
			eMiniControl.addEventListener('mousedown', function(evt){
				window.repeatInsertionTimer = setTimeout(function(){
					startRepeatInsertion(eNote_);
				}, 500);
			});
		})();
		
		e.appendChild(eMiniControl);

		let eNotes = document.createElement('div');
		eNotes.style.float = 'left';
		eNotes.style.border="1px solid #ffffff";
		
		eNotes.addEventListener('mouseover', function(evt){
			pianoElement.style.display = 'block';
		});
		eNotes.addEventListener('mouseout', function(evt){
			pianoElement.style.display = 'none';
		});
		// 건반 생성
		eNote.appendChild(e);
		for(let i=window.pitchBegin;i<window.pitchEnd;i++){
			let ee = document.createElement('div');
			ee.style.display = 'table-cell';
			ee.style.overflow = 'hidden';
			ee.style.float = 'left';
			ee.style.width = (window.pitchWidth - 2).toString(10) + 'px'; // subtraction for 2px border
			ee.style.height = eNoteHeight + 'px';
			ee.style.border = '1px solid #bbbbbb';
			ee.style.cursor = 'pointer';
			ee.innerText = '　';
			ee.setAttribute('pitch', i.toString(10));
			(function (){
				ee.addEventListener('click', function(evt){
					noteList.select(ee);
				});
			})();
			eNotes.appendChild(ee);
		}
		eNote.appendChild(eNotes);
		
		// select row
		let selectable = document.createElement('div');
		selectable.innerText = '○';
		selectable.title = 'click: select this, shift+click: select all from cursor to here, ctrl+click: add/subtract this';
		selectable.style.fontSize = 'smaller';
		selectable.style.display = 'inline-block';
		selectable.style.cursor = 'pointer';
		(function (){
			selectable.addEventListener('click', function(evt){
				
				let elem = document.getElementById('NoteList').firstElementChild;

				for(let i=0;i<noteList.list.length;i++){
					elem.children[2].innerText = '○';
					elem = elem.nextElementSibling;
				}
		

				noteList.selectRow(selectable);
				selectable.innerText = '●';

				evt.stopPropagation();
				evt.preventDefault();
			});		
		})();
		eNote.appendChild(selectable);

		// playable
		let playable = document.createElement('div');
		playable.innerText = '▶';
		playable.title = 'play from here';
		playable.style.fontSize = 'smaller';
		playable.style.display = 'inline-block';
		playable.style.cursor = 'pointer';
		(function (){
			playable.addEventListener('click', function(evt){
				noteList.unselectAllRow();
				let index = parseInt(playable.parentNode.getAttribute('index'));
				noteList.stopMusic();
				window.musicTimer = setTimeout(function(){
					noteList.playMusic(index);
				}, 200);
				evt.stopPropagation();
				evt.preventDefault();
			});		
		})();
		eNote.appendChild(playable);
		
		// pastable
		let pastable = document.createElement('div');
		pastable.innerText = 'P';
		pastable.title = 'paste here';
		pastable.style.fontSize = 'smaller';
		pastable.style.display = 'inline-block';
		pastable.style.cursor = 'pointer';
		(function (){
			pastable.addEventListener('click', function(evt){
				if(noteList.clipboard.length == 0){
					return;
				}
				if(!confirm('really paste here?')){
					return;
				}
				let index = parseInt(pastable.parentNode.getAttribute('index'));
				noteList.paste(index);
				evt.stopPropagation();
				evt.preventDefault();
			});		
		})();
		eNote.appendChild(pastable);

		return eNote;
	}

	this.paste = function(idx){
		let e = document.getElementById('NoteList').children[idx];

		for(let i=0;i<this.clipboard.length;i++){
			this.list.splice(idx + i, 0, this.clipboard[i].deepCopy());
			let ee = this.createNoteElement(idx + i); // 밑에서 다시 numbering을 하지만, 아랫줄의 colorRow에서 꼭 필요함
			this.colorRow(ee);
			e.parentNode.insertBefore(ee, e);
		}
		this.number();
	}

	this.playMusic = function(idx){

		if(idx >= noteList.list.length){
			noteList.stopMusic();
			if(document.getElementById('loopCheck').checked == true){
				noteList.playMusic(0);
			}
			return;
		}

		if(window.musicHighlightElement == null){
			window.musicHighlightElement = document.getElementById('NoteList').children[idx];
			window.musicHighlightElement.children[1].style.border = '1px solid #ff0000';
		} else {
			window.musicHighlightElement.children[1].style.border = '1px solid #ffffff';
			window.musicHighlightElement = window.musicHighlightElement.nextElementSibling;
			window.musicHighlightElement.children[1].style.border = '1px solid #ff0000';
		}
		
		for(let i=window.pitchBegin;i<window.pitchEnd;i++){
			if(noteList.list[idx].pitch[i].piano){
				window.soundManager.play(i);
			}
		}
		
		window.musicTimer = setTimeout(function(){
			noteList.playMusic(idx + 1);
		}, window.inputBeat * noteList.list[idx].valueUp * 20 / noteList.list[idx].valueDown);
		

	}

	this.stopMusic = function(){
		if(window.musicHighlightElement != null){
			window.musicHighlightElement.children[1].style.border = '1px solid #ffffff';
			window.musicHighlightElement = null;
		}
		clearTimeout(window.musicTimer);
	}

	this.colorRow = function(elem){
		let e = elem.children[1].children;
		for(let i=0;i<e.length;i++){
			this.color(e[i], false);
		}
	}

	// 해당 element의 색상 정보를 갱신하여 칠함
	this.color = function(elem, snd){
		let pitch = parseInt(elem.getAttribute('pitch'))
		let index = parseInt(elem.parentNode.parentNode.getAttribute('index'));
		let r = 255;
		let g = 255;
		let b = 255;
		if(this.list[index].pitch[pitch].piano == true){
			g -= 127;
		}
		if(this.list[index].pitch[pitch].guitar == true){
			b -= 127;
		}
		if(snd){
			if(r != 255 || g != 255 || b != 255){
				window.soundManager.play(pitch);
			}
		}
		elem.style.backgroundColor = '#' + r.toString(16) + g.toString(16) + b.toString(16);
	}

	// 맨 마지막에 빈 노트 생성
	this.push = function(){
		this.list.push(new Note());

		let eNoteList = document.getElementById('NoteList');
		let eNote = this.createNoteElement(this.list.length - 1);
		eNoteList.appendChild(eNote);
	}
	
	// 리스트를 바탕으로 element를 처음부터 끝까지 새로 만듬(남용 금지, 성능 느릴 예정)
	// 미완성, 색상은 안됨
	this.refresh = function(){

		let eNoteList = document.getElementById('NoteList');
		eNoteList.innerHTML = '';
		let eNote;
		for(let i=0;i<this.list.length;i++){
			eNote = this.createNoteElement(i);
			eNoteList.appendChild(eNote);
			this.colorRow(eNote);
		}
		
	}

	// 이 객체 전체를 초기화 후 1개 노트 생성
	this.reset = function(){
		this.list = [];
		this.clipboard = [];
		this.list.push(new Note());
		this.refresh();
	}

	this.reset();
}

// onload에서 초기화
noteList = undefined;
soundManager = undefined;

// 피아노 요소 생성
function createPiano(){

	for(let i=window.pitchBegin;i<window.pitchEnd;i++){
		let left = window.pitchLeft + window.pitchWidth * (i - window.pitchBegin);
		let width = window.pitchWidth - 2; // subtraction for 2px border
		let height = window.pitchHeight;
		let zIndex = 1;
		let backgroundColor = '#ffffff'

		if(i % 12 == 0){ // 도
			width += window.pitchHalfWidth;
			if(i == window.pitchEnd - 1){
				width -= window.pitchHalfWidth;
			}
			backgroundColor = '#bbbbbb';
		}
		if(i % 12 == 1){
			zIndex = 2;
			height = pitchBlackHeight;
			backgroundColor = '#000000';
		}
		if(i % 12 == 2){ // 레
			width += window.pitchWidth;
			left -= window.pitchHalfWidth;
			if(i == window.pitchEnd - 1){
				width -= window.pitchHalfWidth;
			}
		}
		if(i % 12 == 3){
			zIndex = 2;
			height = pitchBlackHeight;
			backgroundColor = '#000000';
		}
		if(i % 12 == 4){ // 미
			left -= window.pitchHalfWidth;
			width += window.pitchHalfWidth;
		}
		if(i % 12 == 5){ // 파
			width += window.pitchHalfWidth;
			if(i == window.pitchEnd - 1){
				width -= window.pitchHalfWidth;
			}
		}
		if(i % 12 == 6){
			zIndex = 2;
			height = pitchBlackHeight;
			backgroundColor = '#000000';
		}
		if(i % 12 == 7){ // 솔
			width += window.pitchWidth;
			left -= window.pitchHalfWidth;
			if(i == window.pitchEnd - 1){
				width -= window.pitchHalfWidth;
			}
		}
		if(i % 12 == 8){
			zIndex = 2;
			height = pitchBlackHeight;
			backgroundColor = '#000000';
		}
		if(i % 12 == 9){ // 라
			width += window.pitchWidth;
			left -= window.pitchHalfWidth;
			if(i == window.pitchEnd - 1){
				width -= window.pitchHalfWidth;
			}
		}
		if(i % 12 == 10){
			zIndex = 2;
			height = pitchBlackHeight;
			backgroundColor = '#000000';
		}
		if(i % 12 == 11){ // 시
			left -= window.pitchHalfWidth;
			width += window.pitchHalfWidth;
		}

		let e = document.createElement('DIV');
		e.style.position = 'fixed';
		e.style.width = width + 'px';
		e.style.height = height + 'px';
		e.style.left = left + 'px';
		e.style.zIndex = zIndex;
		e.style.border = '1px solid #000000';
		e.style.backgroundColor = backgroundColor;

		window.pianoElement.appendChild(e);
	}

}

function sanitize(elem){
	setTimeout(function(){
		let valueInt = parseInt(elem.value);

		if(elem.value == "" || isNaN(valueInt) || valueInt == 0){
			if(isNaN(valueInt) || valueInt == 0){
				elem.value = '';
			}
			if(elem.id == 'Beat'){
				window.inputBeat = 24;
			}
			if(elem.id == 'ValueUp'){
				window.inputValueUp = 1;
			}
			if(elem.id == 'ValueDown'){
				window.inputValueDown = 4;
			}
			return;
		}

		if(valueInt < 0){
			valueInt = -valueInt;
			elem.value = valueInt;
			if(elem.id == 'Beat'){
				window.inputBeat = valueInt;
			}
			if(elem.id == 'ValueUp'){
				window.inputValueUp = valueInt;
			}
			if(elem.id == 'ValueDown'){
				window.inputValueDown = valueInt;
			}
			return;
		}

		if(valueInt != Number(elem.value)){
			elem.value = valueInt;
			if(elem.id == 'Beat'){
				window.inputBeat = valueInt;
			}
			if(elem.id == 'ValueUp'){
				window.inputValueUp = valueInt;
			}
			if(elem.id == 'ValueDown'){
				window.inputValueDown = valueInt;
			}
			return;
		}

		if(elem.id == 'Beat'){
			window.inputBeat = valueInt;
		}
		if(elem.id == 'ValueUp'){
			window.inputValueUp = valueInt;
		}
		if(elem.id == 'ValueDown'){
			window.inputValueDown = valueInt;
		}
	}, 1);
}

function createText(){

	var beat = window.inputBeat;
	var loopCheck = document.getElementById('loopCheck').checked;

	var sumValue = 0;
	for(let i=0;i<noteList.list.length;i++){
		sumValue += noteList.list[i].valueUp / noteList.list[i].valueDown; // cause decimal error
	}
	
	// 소수 보정
	var totalFrame = beat * sumValue;
	var totalFrameDecimal = totalFrame - Math.floor(totalFrame);
	if(totalFrameDecimal < 0.00000000001 || totalFrameDecimal > 0.99999999999){
		totalFrame = Math.round(totalFrame);
		totalFrameDecimal = 0;
	}

	if(loopCheck == false){
		totalFrame = 99999;
	} else{
		totalFrame = Math.ceil(totalFrame);
	}

	var s = '<object y="16" x="16" type="1">';

	var currentFrame = 0;
	var currentFrameInteger = 0;
	var currentFrameDecimal = 0;
	for(let i=0;i<noteList.list.length;i++){
		for(let j=window.pitchBegin;j<window.pitchEnd;j++){
			if(noteList.list[i].pitch[j].piano){
				s += '<event eventIndex="17"><param val="';
				s += Math.round(currentFrame);
				s += '" key="offset"/><param val="';
				s += totalFrame;
				s += '" key="frames"/><event eventIndex="104"><param val="';
				s += soundManager.toIWMPitch[j];
				s += '" key="pitch"/><param val="18" key="sound"/></event></event><param val="1" key="scale"/><param val="0" key="tileset"/>';
			}
		}
		currentFrame += noteList.list[i].valueUp * beat / noteList.list[i].valueDown;
		currentFrameInteger = Math.floor(currentFrame);
		currentFrameDecimal = currentFrame - currentFrameInteger;
		if(currentFrameDecimal < 0.00000000001 || currentFrameDecimal > 0.99999999999){
			currentFrame = currentFrameInteger;
		}
	}
	if(loopCheck == false){
		s += '<event eventIndex="17"><param val="';
		s += currentFrame;
		s += '" key="offset"/><param val="';
		s += totalFrame;
		s += '" key="frames"/><event eventIndex="103"></event></event><param val="1" key="scale"/><param val="0" key="tileset"/>';
	}
	s += '</object>';

	document.getElementById('result').value = s;

	document.getElementById('copyTextButton').disabled = false;
	document.getElementById('copyTextButton').value = 'copy text to clipboard';

}

function setClipboard() {
	
	let text = document.getElementById('result').value;
    const type = "text/plain";
    const blob = new Blob([text], { type });
    const data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
        function () {
			document.getElementById('copyTextButton').value = 'copied';
        },
        function () {
			document.getElementById('copyTextButton').value = 'Error! Please check your brower setting.';
        }
    );
}

function transposeLeft(){
	if(!confirm("Continue to transpose all notes by -1")){
		return;
	}
	for(let j=window.pitchBegin + 1;j<window.pitchEnd;j++){
		for(let i=0;i<noteList.list.length;i++){
			noteList.list[i].pitch[j-1].piano = noteList.list[i].pitch[j].piano;
		}
	}
	let e = document.getElementById('NoteList').firstElementChild;
	for(let i=0;i<noteList.list.length;i++){
		noteList.colorRow(e);
		e = e.nextElementSibling;
	}
}

function transposeRight(){
	if(!confirm("Continue to transpose all notes by +1")){
		return;
	}
	for(let j=window.pitchEnd - 2;j>=window.pitchBegin;j--){
		for(let i=0;i<noteList.list.length;i++){
			noteList.list[i].pitch[j+1].piano = noteList.list[i].pitch[j].piano;
		}
	}
	let e = document.getElementById('NoteList').firstElementChild;
	for(let i=0;i<noteList.list.length;i++){
		noteList.colorRow(e);
		e = e.nextElementSibling;
	}
}

var unloadEventCheck = 0;

onload = function(){

	// Node의 뒤에 newNode를 삽입하겠다는 뜻
	Node.prototype.insertAfter = function (newNode) {     
		if (!!this.nextSibling) {
			this.parentNode.insertBefore(newNode, this.nextSibling);
		} else {
			this.parentNode.appendChild(newNode);
		}
	};

	let settingElements = document.getElementById('SettingElement').children;
	for(let i=0;i<settingElements.length;i++){
		settingElements[i].addEventListener('click', function(evt){
			evt.stopPropagation();
		});
	}

	window.guitarCheck = document.getElementById('guitarCheck');
	window.pianoCheck = document.getElementById('pianoCheck');
	window.toggleCheck = document.getElementById('toggleCheck');
	window.pianoElement = document.getElementById('PianoElement');
	window.settingElement = document.getElementById('SettingElement');

	createPiano();

	window.pianoElement.style.height = pitchHeight + 'px';
	document.addEventListener('mousemove', function(evt){
		window.pianoElement.style.top = (evt.clientY + 18).toString(10) + 'px';
	});
	document.addEventListener('keydown', function(evt){
		if(evt.shiftKey || evt.keyCode == 16){
			window.shiftDown = true;
		}
		if(evt.ctrlKey || evt.keyCode == 17){
			window.ctrlDown = true;
		}
		if(window.ctrlDown && evt.keyCode == 65){ // 'A'
			noteList.selectAllRow();
		}
		if(evt.keyCode == 46){ // 'Delete'
			noteList.deleteSelected();
		}
		
	});
	document.addEventListener('keyup', function(evt){
		if(evt.shiftKey || evt.keyCode == 16){
			window.shiftDown = false;
		}
		if(evt.ctrlKey || evt.keyCode == 17){
			window.ctrlDown = false;
		}
	});
	document.addEventListener('click', function(evt){
		if(window.cursorMode == 1){
			noteList.unselectAllRow();
			window.cursorMode = 0;
		}
		if(window.cursorMode == 2){
			noteList.unselectAllCell();
			window.cursorMode = 0;
		}
		noteList.stopMusic();
		if(repeatInsertionTimer != null){
			clearTimeout(repeatInsertionTimer);
			repeatInsertionTimer = null;
		}
	});
	window.onblur = function(){
		//noteList.unselectAllRow();
		window.shiftDown = false;
		window.ctrlDown = false;
		if(repeatInsertionTimer != null){
			clearTimeout(repeatInsertionTimer);
			repeatInsertionTimer = null;
		}
		//noteList.stopMusic();
	}
	document.addEventListener('mouseup', function(evt){
		if(repeatInsertionTimer != null){
			clearTimeout(repeatInsertionTimer);
			repeatInsertionTimer = null;
		}
	});
	
	window.noteList = new NoteList();
	window.soundManager = new SoundManager();
	
}