var instrumentList = [18, 19, 10, 3, 0, 4, 2, 20, 21]
var instrumentRow = 5;
var instrumentImageData = [
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAJGSURBVDhPtVRNa9RQFD1JXpKZsVVrF24sdSXqQnBTdaF1KaILLQou1O79CS4EF4L/QBcuLCpSmOIIg60MFQR/QleOOJ1m0k5lapL5SjL58L6XZNpxJVYPPJJz78vJvTfnRVpY+hzjH0BOr/vG/xFSFBn5fI6uCuI46TiX06HpmuB8aZoqYpIkiXyGoZAsy6itm3j+7A2q32oIohi9vofXr0r4UP6EGBIiWpXKFyy8LKLd7tEzu2JCKAhCIXR55iTW1r7i7KlpzM/N4tbV8zAbm/DdPu7fvIh5WgrJ1b4buDJ7Bla7L0Q4hFDSRoxD4wVIMsNYIQf+ssPEGWOitQy6pkFhKg5SLgh5jQnS1jiVMPB92DtNuJ4roiFtbFstdKyfgnO4XQfWzjZ1EaSRBCPDjmMf05PAkTFV8CiOMK72cWKqIDiHHHZweioHxkve48ChUEhvOHrsOF4svsW5CzMipigMDx4+wpOnjwXnuHRtDqWVJUxMTlDFYRr9rSKecGw7Zcnset1uyhJ41LZlOYio7eGACEKIW4KRPzSVQaWVQVWVEc6hqSp0ijHyHKOKMzHGjeV5HkrvPqJarWO9ZqBmtjAYBGKtlFdpVhD3OhnxfXEZRqOJA4UCKsuruHvvBlzXTyuiwUW0u2Fuo9WyUN/YgmE0xQOO3cZGel+vb8GmtszNHzDMprBGNm9x+vmRcJwOiotl6Hk96Z8nqVp+bLhhMzCmCK6Tt27fuY6AKuUY/ka4s3nyT8E/hOt6KdsjtF+MfP6/B/ALfln5Vj9HjXUAAAAASUVORK5CYII=',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAKzSURBVDhPlZRrSBRRGIaf3Zm9aTuutuKaXckfRWIpRSRSUEoiBkFBd5KgIAmCIIP+RL+KLgRFhUhERmH+kECCvARhUBSpYKmlWWprWaHprrtr7s5sZ2Zx6WKkLxwGzsz3zPt+52Kqqm2OMkuZzGbjGY2KUn0IxWZmIR0S8PsZ9/nQVDUOnRVIslj5+KaTurMnaLhymvamOjRNODKZZg4ySxJ9Ha94V3uNqydLqDyzk3DHY/oEWJLkmYMsNjuNtyo4VlZMQHLgHx0n0eMWPYq9/ydId2Cf40S2WklQXDTV3KP0QCGqqpGs2HnxtJ3hySQ8ixaLeOo0IJFXL/aNjHK1/Cjdba08qLrNxhwrOQkBLKluyk7V8LArwtrdh0lUnEQ1jd+WX3ehikn/6BjPbl5kW6ZEs1cjtySfbPMY0vx5XKpqYWXRHuwOG4lJClokYtTGQZIsE5r4Qf2185hDY+xf7cJmsZCSm4XqD2DLyODynVZyt+wjKTlZRIwYTqZkRDP2xvg4jdfPsSNT5dC6uYyEonhyViCZzKQtXUDFjUaWrCnA6XIRCU/+BtFlgKx2O/V3b1OUHiJFcfCiP0Bnwjy+qhYRwcpgWxeFqVEeVV5gcmJCtNFkFP+qeLN1WDhqRpYllFXZZLgTaesfo/VlL97uPqqfD7Js/WZkixw7Gn8oDgqLPyXIUerah0mOBHF7Uhh9P8CXtx+obRnCs2k7eVt38LeXmAyQbrdw114aPtsYGvpO9f2XDDxpYaSnH18wzOCwj4XLs4wDOp0bXQZIb9wcp8L6g+UElXTSbBreXi9WCdo/+ckvPYI7PR01EjaKplM8mv6Rw+GguOw43xxp9GgKr4M2FhdsIytvwz+dTOmv+8gstoIkdrZJLLt+kLSIaiz3/xR3NCVNxNQbPxkKihGaEQTgJ81dF9VQSM/xAAAAAElFTkSuQmCC',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAKcSURBVDhPrZTdSxRRGMafc+ZjG802a1lMpE8hErFIL+wiCKGgu+gmIkKom/6Bwvv+haDLorsQKrurC7MgJQPZdSW0UGt2S9382pmd2R1n5kzv2d1cL0rIfOFlhjPn/Z3zPs/LsCfP3kXYpeC1567Ef8FkS4LVEdvDGIOialC0ajJe3y5BithA3M1tAv8Kk4VCCHz+lMF0JlVJyypU4BLkKw2IeTY6ci8R8li15k8G6IYBzw8wMTSI5rERGC1JiPUC1tqO48i1fjTuT6LdfAEtqSGjXoIWlsCoTq2W04seg6brEFGE188HYee+4vpSDlcu9lE/CrLpKQymU/jolHD7fCN6kymM4wbU0KsRajAJSg2/Qnp8FCq1cbNM1z92FM0FA0PjKXBvA+uWjd6ODmTXlpHUM2BthzAjLiCiwxVKqWJFM65wLOSXcOtgE/pLDs6EERKLeUwWbLSWyxi2LCwaOroTcWhGA0R8L7hvoW/6PvTABRc+oVjdACYdM3OIl8pEZ2Ceh66mRujUYkiH+WSIO2/C+7ki3aF2GA4n5nA5dQ/d84/JkD11mEqbJ9ZszBCkEArYIsKS5yNtu3Qmw1zJg+mUSRe6g6wKIswud2Ko5wE+tN+pmFC/GaVBc/WeNg9bDkZXC5ikp0brrbQeow3fwgClsgeWX4fQ9mGkcwCM9OJRUKnfhEUbHtJOESuUU24Ro5Rjro03jgWzaCNL6w+X81C6ziJrXEX0JY+e2UcEC2uE2pxx0mXlx3esys1yWOmDzK2hUErnWk+chN7UjJaFMXAewUycoxalFFuGVgI5lyXbRYQwCGkWBQISPO5kcdp8iren7kKXg7vTX5As4iJAzC/CjR0gvURds38N2Zbg6iZIxo5hMqoO/lYX+AVOgiX6cZYxbQAAAABJRU5ErkJggg==',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAIMSURBVDhPrZTfThNBFMa/2T+UJWULiSxYINJasRiM1Qs0Em94C1/GO5/COx/AR1DhhgTiBSERIpJAYmigdGuhaNvdnfXM7Nbsdqdc8UtOmu7OfOfMOd8s+/hpK8QdocW/d0JGTNd1jFs5WNb4yDBNI16dJnVMc8zE8dEpNr9u0z8NjEXPk/hBgKery1h/s4Zutxs/jfgvpmka6mfn2Nndx8bGOuacabkxiU5rrjp/sbm1iynbwtrLGjzPj98mjsmojF6/T4vyePG8ipueh7OLFs7daxn1yzbcqz9YqZZRKc+jc30j9yRJ94xeigrDMESv18f8fQe1Jw/xbKWM5fKCrJQHnNawjJBAMc2ohbqmg5No3/dlBCQyEBjlJaU1NNrUaLqwLR2Plxw8euCgeC8P97JFQiEUc5EoxRgd1W3+JjEDxRkbi7MFFB0bTUpwG0oxgeidRp4bIPwn4jYy7qPWyt7kcibevf8AxiN7hJS3ulqVSVTNF6QqE0vExAKfozCZx8SEBaYbVKFBhh7D9NSk7L7wlkg6TKoykfFXvYFvewcolRZQqbyl/sWbaLIBJTo8OsH3Hyco0JUbJnEDGNrtDr583sZFI5raKGwy9utXNSyVFmWCAam7aRg6Wq02jn+eSnuo4Jxjdm5GCgljJ8l8z0SF0dTUYgJOQxEmHiZjDc5D2WDP80aGSggA/gH50dHK85u1CwAAAABJRU5ErkJggg==',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAK2SURBVDhPrZRbSFRRFIa/c46jM2rZg9mgaSZWVJR0oQx7CCkq6KGnigp66TW6EmGvFYYkQkRCLyEYpmhZQRBdQJIkLxlGaY05k5oheclmnJlzbZ8ZHSWdfOmHxTln7b3/vf5/r7OlqoYmi/8AeeoZB9JULIy4RLKiYIlhS5KRZGUqGx/zEskJifR7PNSXnqHh+jl637VFckjxq4sRyWJXxeFASXTi6+nB33mLhsZ1VFevImWilt737YgS4yJCZJOMD//AKwi+fOji15NrXDks0/LyJw9qh7lQvonu57cZHxkTc+d3I5J1OJNoelRPz80SwjWlnM2zeF0ZoMjo4/guHYa+I+mGmLmANF1V2bLnAOlZ2QRCOuVtFptXh4UUB/wep/FqO5kb95OatgjTiuqL2CBiGrE+ciQ5GfR5UVUNNagSflXGtUtO7tcFaJaPsW3vfiRLxTJNocDF545W1Ek/awt3YmjajNlaOETWilyWZebw7c1DTh8SuyWmcbCkkET/a4b6vOiahWEpDPZ6eHqngtBkIOZZrCJJJMJBjea6CkovSmT88KGnLCGhIF+Uq3PmVD99XiFX01nvNtmRP8Yz9QRF+3aLIsIzFSW5kqkpL+PqeZOMse8iIzPaNsKnSg8ENCrKltJYk8ndo0FOZviRnQ7hV3StjRiRfSLifFCau4X7JpYik7FSJsU7gKe8k+F7Hxmq6magOUzedgN9JIhp2iuiiBHpmsrW4mJqX4iUbwJpyA9+lZyNFun+EMGOEFZ3kA0FYX6P6rR+dZO7Zg1GpC1meWQjKTmVrrctTD6+YbsvRkXfyBJKQvTV7mxDMzAXZ+E+cpmcbHfEHxtzrhE5wcFAn0/oN8XX3Aa0RN7lcuFeniX6L0piY977SBYl/OP/FGQWphGVNI1ZZs/ANHShPX78TQLwB/D0OzGtToRKAAAAAElFTkSuQmCC',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAJ4SURBVDhPrZTdS5NhGMZ/z/u++3KzuZliuSCKSqRMsw8DQ0XtH/Ckg6CziP6BoPPO6rCDQIgKSqIWeNIKDU3sUzRTTDdXU5O0snCb+3Afb89ySXMbnXSdvLz3/XA913PdH+K2+7nOf4CS/RaFwWRGMxqzf8VRnEgIVIOJJz0PeOXpx1K6LZsojKJEimZk8G435/Y/prnmBYPuXgxGUzabj+JEqsJn3wdaT5RQ32Ah4PVLhYZsNh8FiRRNIxKJYzOppIMJ0qOzmI2CeCKFUArfnRfNHIxF4wxcv8K14/NSmeDATo3ztn5eP+ohnZZFlv5tRR6RxWrjfvctLtdM4GpxoFc60Zvr6DxbiWv6DjNTXgyG/CrmECmqypzfT722SHmDU0bkzQ67TMhju7bTdNTOuneEUCgkReWqyiEymi28e/OeUy4flfI5+l4XfFoAXwB97hstHVa+jPYSXI2iSh//xiaRomr4JqeoFc9oq7XAxCpiKICYWEEM+BEzqzAZ5uoFB96nNwgFwzmqNmkVRRAOh6ha+Ih1t8bNt04Ww6p8nSPzQBK6oKM6TPOhEMHZGRLJ5Ibp+saEbSrSZcBokg0nzDwcL2V0xcLgEsRSCssxwcuvOu5AGdNehRKbHXVLG+QMbWauxoeHmPfcY3kthS4F9Z0J4f2h0uW2UmNPkTBa6bx4CWdFBamMqixyaBPxGI1t7VS3d7Emmy+5HkWcLMN60Ma69OSnauO0JCmvqsohyaDgGimRAzrS5yH8fYlG1UNE38ZYspXaI4fZsWff7wu3oug+Mki/0tLgsaFh6YmNuqZjxKORPCV/8M/FpskuzhQilUxkI4UAvwAvVuGSm0cwQwAAAABJRU5ErkJggg==',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAMmSURBVDhPdZRLbFRlGIafc50LRVq5JKXp2BpdgCRKQipFAskkRaJRIyawk9AYXZAYTVipGxdo3LsgqbHKZSWQICqEaDQVMTUjG1KDWqBYi3am0LnPmXPmnOP3nzO0TFLf5J/L973zzvtd/qMdPzsRsgJ0XQet/aWNMAgJwxXpCLsTmq5h2za14iKlfJ5yoRCd4vw8XtPBsqw2sxMdjgzTEIESTukuY1/9zFx+EUM5EzQ9nz1Pb2b4iQwb+geV5Q53S0JKxK9VGf9ygsvX81hvvUO97xHw/ZiYMElfOEfj24u8tjNDNrsL74FSIyFVTqNc5tT5H7my7UVWZ4cxNzq8u96kW0hJ6dWfhHx8M8CtJ6gcO8UBptm7N4toRYh8m4aJJ26mFv5m4PVhjIEaH3abvGmZvCpnv2kyWWrR3ePTP+jQe2Q/V3OTJC0bTYsnoqsP1WKRY2e+pz56FF9r8lHKZjRtRoQDdx1GCg2m3AAzANcJeGhtyK2X3uPTsXGSyUTEi4R8r0U5qNC/L0Oz0WKdEf/LKyKSkybP+gFpKd+XfvRIypD33n2PUZCp3h9G/Cpilqlh2DAgIu+XXDb9W2fKC0hJ2mrbr0s/jq5J8Kj82EiG6IYRxRUiIUXzWxoLJXi72+YDIdsSlAEv9UChS1wduufweyhNLy7HFSKhUGKVO0Xyx6f5uhDwsIypTxwub0kMXQz0dOlU/moxe+Ka9MuNqolyag+SXat4YfdWVl06yfgVjaHzi9xoBCTTUkJCSpZjpTXKcy1mfmoymwvov/oFzz4/QtMVMYGphGw7wZNbt3D60hjatd8INz7O7UoTw5CFa/tSJTp1naCVwspdxL53i6e2HcSTQUX5+5utHP46+Quf//AHXu8makPPEa5eq25qRMSwsKdzmLevs25mgsMHX6YvkyEI4ny8LBE0tj+zA0fqvvzdN8zX8jhml0RjR4FmsL46Q2LhBofeGCUzOLDkRqHj0ir76vGRSiU4+cln/DN3Z2nEnvRi90iWoR3bcV1PrmDbaRsdQg8ilUpKj5b3RMEVMSWyEuKFXAGNhkO1Wus4/ycC8B/m1FrFRSYkjwAAAABJRU5ErkJggg==',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAKHSURBVDhPrZNNSBRhGICfb2Z3dlfddl11VQTFnzqkdUqiAokQj2WXisBLP7eQ0CiIQOgQdIgOQUSXJOjSoaAgwoqiJDPKSgIXU3HzBzVR8SfXnZ35+mb8QSmVqOfyDjPzPnzvzyfuPngt+Q9oS/GfWSPSNA1d19FV/FtWMrxeD4ODI3TF+uiNDyHS0sEwlr5ujityTtDdE8fw+Yjm55IRDjF/5zZm21uIZIHH4/68Ea7IlpKc7AjxoRHKK7ZxrPUJ+z61U9LyiKlL57EGBpChMFKVjRA405EsxmVWpub0ZzqZItB8i6x4H9V7djE7NExKnaZ9ZIIJTcc40wDBLVhSoMmkk+XKhPu0hG3bBH1etKN1jKVl8LTtA6mZWTzTsxyoKKPGr5O4epnJ69coTf9GnaynWHRg4XXz14xHWhYiEsF79gLj/jTeDf9Az4uSGp+gZXSce4k5+r3dlMeu0NleTre5F02k3Nw1IhfTRGwJ4Wu8yJhq9MeOTh73xmm2bIyARk00QW2TpOsVFPX0ELBMt7zfRQ5mEqF6EahvZCyaz8O5OZKaZH7G5lxnIXZVLUaxD39hOv7ET6QawJ9FDkqmZ+ain26gKq+A0MQCif1BtXDQWlDN88ojjESymUwPqcbL9UWa1Bn1fKavKEbpiSZKbuzgUP8MJ+0Up7aa3Bzw8XIuE79qt8P6l1a9lULSH3zDWDhG39cpDpvHCXpCiJww999/J+AzOLgzykJKbdWGt1/tixQ2llANtTX8KY3osy8M11YiFkwsW6q7uVjU+j1yUCcSSuaxfXiFoZbWpqxUiZ1qVIOXJQ4bixyctVVCtbIkdQ8vtu9GtxZ3ZzWbi1bhOA0lceJa4BcNkejkt8Y0JgAAAABJRU5ErkJggg==',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAKySURBVDhPrZRbSBRhFMf/szOu42ppRq673hYStouYFoLVQw+GPqgUBT1UhBERRQVdoF6KQPAtfKugCPKpHlJJohtRZJaapq5BqWka4u6Wlut6wd2dmb7vzOzNpZ76wbBnzsf3n+87539WaGp+o+E/YDJ+EzAnmyGnJEOWjYfFkiQZq4kknMhkEpAkJaG15Tm83p/snX9LQDAURHl5KbaUbIKqKuyJv0hESBAECEykp9uFj72fUFe3H9UVWyGJLM/WfP5l3G5qQ/vbHtTUViA31wZFUUiEE3MiDYODw5DZlS6cPoD0VFlPr2B8ahZX6m+guHgDbLYsaJq+nWokiiI83mmMfBnF1UtH/irCcdgz0HDtDB63vWSf5jfR8yQUWA5g8rsHlZU7wMvZ/m4AM798fCmO3r4huD3TyLOuQvn2Ugx9/kqH4LBaClhYXML42ARO1tVS8uadZox+m6Q4lgesAf2uEYpPHduH9x29kU7q7WfHs6SYKeQcOrwH+fk5xluUmurdcG5cT3FmugzJHLVDxEexzazaVYLsdRmU63RNYHDYTfmdZU44crIopiLHbNKFWEJVVAo5kqing4Egzp1vwPXGu/QuMk+RrRghRYNqdIxj4rEkidDEJHQNjBlpHe4fR54VNutaIxPl6et+ZK5hpzbEyEe8YFNuLz6w4t2/V08L/yIQVFG19yyOnzhILudadFDu0DSLBZb01Wh50oXZhSBtWMlSQMH8sorGWw+xuchJ+8K3izhbZHVZZDbo7nTB+2MGly8eZZ2zR8YgmTm+9dErPHvRAUdBDraVFZFI3NUoYnAxv38BPp8ffWzefHPzVCeOwppRWFiA3Lxs2O1WGuawCCdOiMM38uLP/p5jEx/iFiN4h9JSLUixyAiFosMaJkEoDP0bhAfJQNPUSE3iAf4AlQQJTHPbUooAAAAASUVORK5CYII='
];
var instrumentEnd = 30;
var instrumentColor = [];
instrumentColor.push([197,29,52]);
instrumentColor.push([132,195,190]);
instrumentColor.push([59,131,189]);
instrumentColor.push([247,94,37]);
instrumentColor.push([169,131,7]);
instrumentColor.push([222,76,138]);
instrumentColor.push([166,94,46]);
instrumentColor.push([243,218,11]);
instrumentColor.push([87,166,57]);

var pitchBegin = 16;
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

var selectedNumber = 0;

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
		cPitch *= 1.0594630943593; // 2 ^ (1/12)
	}
	cPitch = 1.0;
	for(let i=48;i>=window.pitchBegin;i--){
		this.toIWMPitch[i] = Math.round(cPitch * 10000) / 10000;
		cPitch /= 1.0594630943593;
	}
	// 모든 경우에서 1.00500000 같은 수가 등장하기 않기 때문에 굳이 + EPSILON 할 필요 없음
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

function Note(){
	this.valueUp = window.inputValueUp; // 분자
	this.valueDown = window.inputValueDown; // 분모
	this.selected = false;
	this.pitch = [];
	for(let i=0;i<100;i++){
		let v = [];
		for(let j=0;j<window.instrumentEnd;j++){
			v.push(false)
		}
		this.pitch.push(v);
	}
}
Note.prototype.deepCopy = function(){
	let cNote = new Note();
	cNote.valueUp = this.valueUp;
	cNote.valueDown = this.valueDown;
	for(let i=window.pitchBegin;i<window.pitchEnd;i++){
		for(let j=0;j<window.instrumentEnd;j++){
			cNote.pitch[i][j] = this.pitch[i][j];
		}
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

		// 혹시모를 대비용, 리스트가 너무 길어질 경우
		if(this.list.length >= 65536){
			alert('ERROR: Too much note size.');
			return;
		}
		
		// insert도중 한 번이라도 노트 개수 8을 넘은 경우, 페이지 이탈시 이벤트를 부착
		if(this.list.length > 8 && window.unloadEventCheck == 0){
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
		
		if(window.selectedNumber <= 0){
			return;
		}

		if(!confirm('continue to delete selected notes')){
			return;
		}
		
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
		/*
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
		*/
		let exist = false;
		for(let i=0;i<window.instrumentEnd;i++){
			if(noteList.list[index].pitch[pitch][i] == true){
				exist = true;
				break;
			}
		}
		if(exist == true){
			for(let i=0;i<window.instrumentEnd;i++){
				noteList.list[index].pitch[pitch][i] = false;
			}
		} else{
			for(let i=0;i<window.instrumentEnd;i++){
				if(eInstrument[i] != null){
					noteList.list[index].pitch[pitch][i] = eInstrument[i].checked;
				}
			}
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

		document.getElementById('cursorLocation').innerText = index.toString(10);
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
		
		window.selectedNumber = 0;

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

		if(window.selectedNumber <= 0){
			return;
		}

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
		document.getElementById('clipboardNumber').innerHTML = noteList.clipboard.length;
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
					for(let k=0;k<window.instrumentEnd;k++){
						noteList.list[i].pitch[j][k] = false;
					}
					this.color(e.children[1].children[j - window.pitchBegin], false);
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

		document.getElementById('cursorLocation').innerText = '';
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
				}, 100);
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

		if(idx >= noteList.list.length || idx < 0){
			noteList.stopMusic();
			if(document.getElementById('loopCheck').checked == true){
				let nxt = parseInt(document.getElementById('loopMusicFrom').value);
				if(isNaN(nxt) || nxt < 0){
					document.getElementById('loopMusicFrom').value = '0';
					nxt = 0;
				}
				noteList.playMusic(nxt);
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
			for(let k=0;k<window.instrumentEnd;k++){
				console.log(idx, i, k);
				if(noteList.list[idx].pitch[i][k] == true){
					window.soundManager.play(i);
					break;
				}
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
		let instrumentNumber = 0;
		for(let i=0;i<window.instrumentList.length;i++){
			if(this.list[index].pitch[pitch][instrumentList[i]] == true){
				r += instrumentColor[i][0];
				g += instrumentColor[i][1];
				b += instrumentColor[i][2];
				instrumentNumber++;
			}
		}
		
		r %= 256;
		g %= 256;
		b %= 256;
		r = r.toString(16);
		if(r.length == 1){
			r = '0' + r;
		}
		g = g.toString(16);
		if(g.length == 1){
			g = '0' + g;
		}
		b = b.toString(16);
		if(b.length == 1){
			b = '0' + b;
		}
		
		if(snd){
			if(instrumentNumber > 0){
				window.soundManager.play(pitch);
			}
		}
		
		elem.style.backgroundColor = '#' + r + g + b;
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
		let color = '#000000';

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
			color = '#ffffff';
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
			color = '#ffffff';
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
			color = '#ffffff';
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
			color = '#ffffff';
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
			color = '#ffffff';
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
		e.style.color = color;
		e.style.fontSize = '8px';
		e.style.textAlign = 'center';
		e.innerText = i.toString(10);

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
	var loopStart = parseInt(document.getElementById('loopMusicFrom').value);
	if(isNaN(loopStart) || loopStart < 0){
		document.getElementById('loopMusicFrom').value = '0';
		loopStart = 0;
	}
	if(loopStart >= noteList.list.length){
		loopStart = 0;
		loopCheck = false;
	}

	var loopTotalValue = 0;
	for(let i=loopStart;i<noteList.list.length;i++){
		loopTotalValue += noteList.list[i].valueUp / noteList.list[i].valueDown; // cause decimal error
	}
	
	// 소수 보정
	var loopFrame = beat * loopTotalValue;
	var loopFrameDecimal = loopFrame - Math.floor(loopFrame);
	if(loopFrameDecimal < 0.00001 || loopFrameDecimal > 0.99999){
		loopFrame = Math.round(loopFrame);
		loopFrameDecimal = 0;
	}

	if(loopCheck == false){
		loopFrame = 99999;
	} else{
		loopFrame = Math.ceil(loopFrame); // 맨 마지막 프레임에서 소수가 잘린 경우 ceil을 함...
	}

	var s = '<object y="16" x="16" type="1">';

	var currentFrame = 0;
	var currentFrameInteger = 0;
	var currentFrameDecimal = 0;
	for(let i=0;i<noteList.list.length;i++){
		let firstFound = true;
		for(let j=window.pitchBegin;j<window.pitchEnd;j++){
			for(let k=0;k<window.instrumentList.length;k++){
				let cInst = window.instrumentList[k];
				if(noteList.list[i].pitch[j][cInst] == true){
					if(firstFound){
						s += '<event eventIndex="17"><param val="';
						s += Math.round(currentFrame); // 처음 발동할 프레임(반올림 하는게 맞을까?)
						s += '" key="offset"/><param val="';
						if(loopCheck == true && i < loopStart){
							// 루프가 있고 루프 이전인 경우 1회만
							s += "99999";
						} else{
							// 루프가 없거나(loopFrame = 99999), 루프가 있을 때(loopFrame < 99999)
							s += loopFrame; // 첫 번째 이후 간격
						}
						s += '" key="frames"/>';
						firstFound = false;
					}
					s += '<event eventIndex="104"><param val="';
					s += soundManager.toIWMPitch[j];
					s += '" key="pitch"/><param val="';
					s += cInst.toString(10); // 악기
					s += '" key="sound"/></event>';
				}
			}
		}
		if(firstFound == false){
			s += '</event>';
		}
		currentFrame += noteList.list[i].valueUp * beat / noteList.list[i].valueDown;
		currentFrameInteger = Math.floor(currentFrame);
		currentFrameDecimal = currentFrame - currentFrameInteger;
		if(currentFrameDecimal < 0.00001 || currentFrameDecimal > 0.99999){
			currentFrame = currentFrameInteger;
		}
	}

	// 루프가 없을 때 제거이벤트
	if(loopCheck == false){
		s += '<event eventIndex="17"><param val="';
		s += Math.ceil(currentFrame);
		s += '" key="offset"/><param val="';
		s += loopFrame;
		s += '" key="frames"/><event eventIndex="103"></event></event><param val="1" key="scale"/><param val="0" key="tileset"/>';
	}

	s += '<param val="1" key="scale"/><param val="0" key="tileset"/></object>';

	document.getElementById('result').value = s;

	//document.getElementById('copyTextButton').disabled = false;
	//document.getElementById('copyTextButton').value = 'copy text to clipboard';
	
	var totalSecond = Math.round(currentFrame * 2) / 100;
	var totalFrame = Math.ceil(totalSecond * 50);
	document.getElementById('resultState').innerText = 'Creation Successful! Total Length: ' + totalSecond.toString(10) + ' seconds, ' + totalFrame.toString(10) + ' frms';
	if(totalSecond >= 600){
		document.getElementById('resultState').innerText = 'Warning: Music is too long: ' + totalSecond.toString(10) + ' seconds, ' + totalFrame.toString(10) + ' frms';
	}

}
/*
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
*/
function transposeLeft(){
	if(window.selectedNumber > 0){
		if(!confirm("Continue to transpose selected notes by -1")){
			return;
		}
	} else{
		if(!confirm("Continue to transpose all notes by -1")){
			return;
		}
	}
	
	for(let j=window.pitchBegin + 1;j<window.pitchEnd;j++){
		for(let i=0;i<noteList.list.length;i++){

			// 어딘가 선택은 되었으나 현재 노트가 선택되지 않은 경우
			if(noteList.list[i].selected == false && window.selectedNumber > 0){
				continue;
			}

			for(let k=0;k<window.instrumentEnd;k++){
				noteList.list[i].pitch[j-1][k] = noteList.list[i].pitch[j][k];
				noteList.list[i].pitch[j][k] = false;
			}
		}
	}
	
	let e = document.getElementById('NoteList').firstElementChild;
	for(let i=0;i<noteList.list.length;i++){
		noteList.colorRow(e);
		e = e.nextElementSibling;
	}
}

function transposeRight(){
	if(window.selectedNumber > 0){
		if(!confirm("Continue to transpose selected notes by +1")){
			return;
		}
	} else{
		if(!confirm("Continue to transpose all notes by +1")){
			return;
		}
	}

	for(let j=window.pitchEnd - 2;j>=window.pitchBegin;j--){
		for(let i=0;i<noteList.list.length;i++){
			if(noteList.list[i].selected == false && window.selectedNumber > 0){
				continue;
			}
			
			for(let k=0;k<window.instrumentEnd;k++){
				noteList.list[i].pitch[j+1][k] = noteList.list[i].pitch[j][k];
				noteList.list[i].pitch[j][k] = false;
			}
		}
	}
	let e = document.getElementById('NoteList').firstElementChild;
	for(let i=0;i<noteList.list.length;i++){
		noteList.colorRow(e);
		e = e.nextElementSibling;
	}
}

var unloadEventCheck = 0;

var eInstrument = []
var eToggleInstrument = null;

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



	for(let i = 0;i<100;i++){
		eInstrument[i] = null;
	}

	for(let i = 0;i<window.instrumentList.length;i++){

		if(i != 0 && i % window.instrumentRow == 0){
			let eBR = document.createElement('BR');
			document.getElementById('instrument').appendChild(eBR);
		}

		let code = instrumentList[i];

		let eLabel = document.createElement('LABEL');
		let eInput = document.createElement('INPUT');
		eInput.setAttribute('id', 'instrument' + code.toString(10));
		eInput.setAttribute('type', 'checkbox');
		if(i == 0){
			eInput.setAttribute('checked', 'checked')
		}
		let eImg = document.createElement('IMG')
		eImg.setAttribute('src', window.instrumentImageData[i])

		eInstrument[code] = eInput;

		eLabel.appendChild(eInput);
		eLabel.appendChild(eImg);
		document.getElementById('instrument').appendChild(eLabel);
	}
	/*
	let eBR = document.createElement('BR');
	document.getElementById('instrument').appendChild(eBR);
	let eLabel = document.createElement('LABEL');
	let eInput = document.createElement('INPUT');
	*/
	//window.eToggleInstrument = document.getElementById('toggleCheck');

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
		if(evt.keyCode == 65){// 'A'
			noteList.selectAllRow();
		}
		if(evt.keyCode == 67){ // 'C'
			noteList.copy();
		}
		if(evt.keyCode == 88){ // 'X'
			noteList.cut();
		}
		/*
		if(window.ctrlDown && evt.keyCode == 65){ // 'A'
			noteList.selectAllRow();
		}*/
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

	document.getElementById('result').onkeydown = function(e){
		e.stopPropagation();
		//e.preventDefault();
	}	
	
	document.getElementById('transposeLeft').onclick = function(e){
		e.stopPropagation();
		transposeLeft();
	}
	
	document.getElementById('transposeRight').onclick = function(e){
		e.stopPropagation();
		transposeRight();
	}
	/*
	document.getElementById('button_openpopuploadfromtext').onclick = function(e){
		document.getElementById('popup_loadfromtext').style.display = 'block';
	}
	document.getElementById('button_closepopuploadfromtext').onclick = function(e){
		document.getElementById('popup_loadfromtext').style.display = 'none';
	}*/
	
}