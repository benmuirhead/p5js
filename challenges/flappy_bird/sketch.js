var bird
var pipes = []

function setup() {
    createCanvas(400, 400)
    bird = new Bird()
    pipes.push(new Pipe())


}




function draw() {
    background(0)


    if (frameCount % 80 == 0) {
        pipes.push(new Pipe())
    }

    for (var i = pipes.length - 1; i >= 0; i--) {
        pipes[i].show()
        pipes[i].update()

        if(pipes[i].hits(bird)){
            print("hit")
        }

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1)
        }
    }


    bird.show()
    bird.update()

}


function keyPressed() {
    if (key == ' ') {
        bird.up()
    }
}