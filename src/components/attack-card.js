
	var ghAtkCard = Object.create(HTMLElement.prototype);
	ghAtkCard._atkImg = new Image();
	ghAtkCard._atkImg.src = "/dist/images/AttackModifier.jpg";

	ghAtkCard.createdCallback = function() {
		this.innerHTML = '<canvas style="display: none;"></canvas><img></img>';
		this._canvas = this.querySelector('canvas');
		this._img = this.querySelector('img');
		this._img.style.width = "inherit";
		this._img.style.height = "inherit";
	}
	ghAtkCard.detachedCallback = function() {
	}
	
	ghAtkCard.render = function(atkNum) {
		this._canvas.height = this._atkImg.height;
		this._canvas.width = this._atkImg.width;
		var ctx  = this._canvas.getContext('2d');
		ctx.drawImage(this._atkImg, 0, 0);

		var atkMod = null;
		if (this.attributes.type) {
			switch (this.attributes.type.value) {
				case 'add':
					atkMod = '+';
					break;
				case 'sub':
					atkMod = '-';
					break;
				case 'mul':
					atkMod = 'x';
					break;
				default:
					break;
			}
		}
		
		if (atkNum != null) {
			ctx.font="140px Gloomhaven"; 
			ctx.textBaseline="middle";

			ctx.shadowOffsetX = 0;
			ctx.shadowOffsetY = 0;
			//ctx.shadowColor = 'red';
			//ctx.shadowBlur    = 4;
			ctx.lineWidth = 3;

			
			ctx.lineWidth = 0;
			ctx.shadowBlur = 0;
			ctx.fillStyle = 'white';

			ctx.textAlign="center"; 
			if (atkMod) {
				ctx.textAlign="right";
				ctx.strokeText(atkMod, this._canvas.width / 2, this._canvas.height / 2);
				ctx.fillText(atkMod, this._canvas.width / 2, this._canvas.height / 2);
				ctx.textAlign="left";
			}
			var text = "" + atkNum;
			ctx.strokeText(text, this._canvas.width / 2, this._canvas.height / 2);
			ctx.fillText(text, this._canvas.width / 2, this._canvas.height / 2);

		}

		var dataURL = this._canvas.toDataURL();
		this._img.src = dataURL;
	}
	ghAtkCard.attachedCallback = function() {
		var atkAttr = this.attributes.atk;
		var atkValue = 0;
		if (atkAttr) {
			atkValue = atkAttr.value;
		}
		this.render(atkAttr.value);
	}

	ghAtkCard.attributeChangedCallback = function(attrName, oldValue, newValue) {
		console.log(arguments);
		if (attrName === 'atk') {
			this.render(newValue);
		}
	}


	// IE8 Shims needed Array.forEach, Array.map, HTMLElement.classList
	document.registerElement('gloomhaven-attack-card', {
		prototype: ghAtkCard
	});
/*
<gloomhaven-attack-card>
document.body.innerHTML = '<gloomhaven-attack-card atk="2"></gloomhaven-attack-card>'
*/
