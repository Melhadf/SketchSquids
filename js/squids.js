const Squids = function(width, height) {
    const environment = new Environment(1000, 13, new Mutator());
    let zoom = .7;

    this.update = timeStep => {
        environment.update(timeStep);
    };

    this.draw = context => {
        context.save();
        context.translate(width * .5, height * .5);
        context.scale(zoom, zoom);
        context.lineWidth = 3;

        environment.draw(context);

        context.restore();
    };
};