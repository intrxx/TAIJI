export default class PreloadGame extends Phaser.Scene 
{
    constructor()
    {
        super('PreloadGame');
    }

    preload()
    {

    }

    create()
    {
        this.Scene.start('BoardScene');
    }
}