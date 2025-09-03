/**
 * Handler de menu 
 *
 * Il g�re l'affichage et les actions utilisateur, mais pas le positionnement
 * des �l�ments de menu, ni leur arriv�e � l'�cran.
 *  - les fl�ches haut et bas d�placent la s�lection
 *  - espace et entr�e valident la s�lection
 *  - escape s�lectionne et valide une option d�finie par l'�cran utilisateur
 *
 * Il est destin� � �tre encapsul� dans un �cran qui g�rera ces �l�ments.
 */

 /**
  * Cr�ation du gestionnaire du menu, hors la partie graphique
  *  - container : l'objet DIV qui contiendra les �l�ments DHTML cr��s
  *  - fader : le fader sur le container (�tat In, i.e. affichage normal, en entr�e)
  *  - imageFx : l'outil pour effectuer les op�rations graphiques (texte d�tour�)
  *  - count : le nombre d'entr�es dans le menu
  * 
  */
 function MenuDriver(controls, soundManager)
 {
	this.controls = controls;
	this.soundManager = soundManager;
	this.optionCount = 5;
	this.active = false;
 }
 
 
  MenuDriver.prototype = {
  
  
    /**
	 * Initialization / remise � z�ro des param�tres 
	 *  - premier �l�ment de menu s�lectionn�
	 */
	initialize : function() {
		this.done=false;
		this.selectedOption = 0;
		this.controls.totalClear();
	},
	
	/**
	 * Renvoie l'index de l'option s�lectionn�e
	 */
	getSelectedOption : function() {
		return this.selectedOption;
	},
	

	processEvents : function() {
		this.selectedOption += (this.controls.controlUp&&this.selectedOption>0?-1:0)
								+(this.controls.controlDown&&this.selectedOption<this.optionCount-1?1:0);
		if (this.controls.areaClicked) {
			this.selectedOption = this.controls.areaClicked-1;
		}
		
		if (this.controls.controlFire) {
			switch(this.selectedOption) {
				case 1 :
					this.controls.toggleStance();
					break;
				case 2 :
					this.soundManager.toggleMusic();
					break;
				case 3 :
					this.soundManager.toggleSound();
					break;
				default :	
					this.done = true;
					this.active = false;
			}
		}
		this.controls.totalClear();
	}
	
	
}
	