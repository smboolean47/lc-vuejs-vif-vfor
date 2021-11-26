const app = new Vue({
	el: '#root',
	data: {
		tempoBello: true,
		eta: 16,
		peso: 100,
		menuAperto: true,
		studenti: [
			'Franco',
			'Maurizio',
			'Federico',
			'Simone'
		],
		spesa: [
			'mele',
			'zucchine',
			'cipolle'
		]
	},
	methods: {
		sovrappeso: function() {
			if( this.peso > 90 ) {
				return true;
			} else {
				return false;
			}
		},
		toggleMenu: function() {
			// se this.menuAperto == true
			// this.menuAperto = false
			// altrimenti
			// this.menuAperto = true
			if(this.menuAperto == true) {
				this.menuAperto = false
			} else {
				this.menuAperto = true
			}
		},
		salutaStudente: function(index) {
			// console.log(index);
			alert(`Ciao caro ${this.studenti[index]}`);
		}
	}
});