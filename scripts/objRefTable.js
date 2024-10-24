const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Behaviors.EightDir,
		C3.Behaviors.Bullet,
		C3.Plugins.Mouse,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Exps.X
	];
};
self.C3_JsPropNameTable = [
	{PlanoDeFundoEmBlocos: 0},
	{PlanoDeFundoEmBlocos2: 0},
	{Sólido: 0},
	{Sprite: 0},
	{CentrarEm: 0},
	{RestritoAoLayout: 0},
	{"8Direções": 0},
	{player: 0},
	{Projétil: 0},
	{bala: 0},
	{Mouse: 0},
	{inimigo: 0}
];

self.InstanceType = {
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	player: class extends self.ISpriteInstance {},
	bala: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	inimigo: class extends self.ISpriteInstance {}
}