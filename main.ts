namespace graphing {


    // note that Caml casing yields lower case
    // block text with spaces


    function normaliseArray(xs: Array<number>, mini: number, maxi: number) {
        let xs_mini = xs.reduce((a, b) => Math.min(a, b), 9007199254740991); //For some reason Number.MAX_SAFE_INTEGER just breaks
        let xs_maxi = xs.reduce((a, b) => Math.max(a, b), -9007199254740991);
        console.log(xs_mini);
        let index = 0;
        let new_xs: Array<number> = [];
        while (index < xs.length) {
            new_xs[index] = mini + (xs[index] - xs_mini) * (maxi - mini) / (xs_maxi - xs_mini);
            index = index + 1;
        }
        return new_xs
    }

    //% block
    export function lineGraph(x_list: Array<number>, y_list: Array<number>) {
        
        let normal_x_list = normaliseArray(x_list, 5, 154);
        let normal_y_list = normaliseArray(y_list, 114, 5);
        console.log(normal_x_list);
        screen().fill(1);
        screen().drawLine(5, 5, 5, 114, 0);
        screen().drawLine(5, 114, 154, 114, 0);

        let index2 = 1;
        let point: number[] = [normal_x_list[0], normal_y_list[0]];
        let new_point: number[] = [normal_x_list[1], normal_y_list[1]];

        while (index2 < Math.min(x_list.length, y_list.length)) {
            new_point = [normal_x_list[index2], normal_y_list[index2]];
            screen().drawLine(point[0], point[1], new_point[0], new_point[1], 2);
            point = [normal_x_list[index2], normal_y_list[index2]];
            index2 = index2 + 1;
        }
        return;

    }
    
    //% block
    export function drawTurtle() {
        let d = 0
        let y = 0
        let x = 0
        let pencilDown = true
        function pencilUpDirection() {
            if (d == 0) {
                screen().drawBitmap(bmp`
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            `, x - 3, y - 3)
            } else if (d == 1) {
                screen().drawBitmap(bmp`
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            `, x - 3, y - 3)
            } else if (d == 2) {
                screen().drawBitmap(bmp`
            1 1 1 1 
            1 1 1 1 
            1 1 1 1 
            1 1 1 1 
            1 1 1 1 
            1 1 1 1 
            1 1 1 1 
            `, x, y - 3)
            } else if (d == 3) {
                screen().drawBitmap(bmp`
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            `, x - 3, y)
            } else if (d == 4) {
                screen().drawBitmap(bmp`
            1 1 1 1 
            1 1 1 1 
            1 1 1 1 
            1 1 1 1 
            1 1 1 1 
            1 1 1 1 
            1 1 1 1 
            `, x - 3, y - 3)
            }
        }
        function pencilDownDirection() {
            if (d == 0) {
                screen().drawBitmap(bmp`
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            1 1 1 8 1 1 1 
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            `, x - 3, y - 3)
            } else if (d == 1) {
                screen().drawBitmap(bmp`
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            1 1 1 8 1 1 1 
            `, x - 3, y - 3)
            } else if (d == 2) {
                screen().drawBitmap(bmp`
            1 1 1 1 
            1 1 1 1 
            1 1 1 1 
            8 1 1 1 
            1 1 1 1 
            1 1 1 1 
            1 1 1 1 
            `, x, y - 3)
            } else if (d == 3) {
                screen().drawBitmap(bmp`
            1 1 1 8 1 1 1 
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 
            `, x - 3, y)
            } else if (d == 4) {
                screen().drawBitmap(bmp`
            1 1 1 1 
            1 1 1 1 
            1 1 1 1 
            1 1 1 8 
            1 1 1 1 
            1 1 1 1 
            1 1 1 1 
            `, x - 3, y - 3)
            }
        }
        controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
            if (pencilDown) {
                pencilDownDirection()
                y = (y + 116) % 120
                screen().drawBitmap(bmp`
            1 1 1 2 1 1 1 
            1 1 2 2 2 1 1 
            1 2 2 2 2 2 1 
            2 2 2 8 2 2 2 
            1 1 1 8 1 1 1 
            1 1 1 8 1 1 1 
            1 1 1 8 1 1 1 
            `, x - 3, y - 3)
            } else {
                pencilUpDirection()
                y = (y + 116) % 120
                screen().drawBitmap(bmp`
            1 1 1 2 1 1 1 
            1 1 2 2 2 1 1 
            1 2 2 2 2 2 1 
            2 2 2 2 2 2 2 
            `, x - 3, y - 3)
            }
            d = 1
        })
        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            pencilDown = !(pencilDown)
            if (!(pencilDown)) {
                screen().drawBitmap(bmp`
            2 
            `, x, y)
            } else {
                screen().drawBitmap(bmp`
            8 
            `, x, y)
            }
        })
        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            if (pencilDown) {
                pencilDownDirection()
                x = (x + 156) % 160
                screen().drawBitmap(bmp`
            1 1 1 2 1 1 1 
            1 1 2 2 1 1 1 
            1 2 2 2 1 1 1 
            2 2 2 8 8 8 8 
            1 2 2 2 1 1 1 
            1 1 2 2 1 1 1 
            1 1 1 2 1 1 1 
            `, x - 3, y - 3)
            } else {
                pencilUpDirection()
                x = (x + 156) % 160
                screen().drawBitmap(bmp`
            1 1 1 2 
            1 1 2 2 
            1 2 2 2 
            2 2 2 2 
            1 2 2 2 
            1 1 2 2 
            1 1 1 2 
            `, x - 3, y - 3)
            }
            d = 4
        })
        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            if (pencilDown) {
                pencilDownDirection()
                x = (x + 164) % 160
                screen().drawBitmap(bmp`
            1 1 1 2 1 1 1 
            1 1 1 2 2 1 1 
            1 1 1 2 2 2 1 
            8 8 8 8 2 2 2 
            1 1 1 2 2 2 1 
            1 1 1 2 2 1 1 
            1 1 1 2 1 1 1 
            `, x - 3, y - 3)
            } else {
                pencilUpDirection()
                x = (x + 164) % 160
                screen().drawBitmap(bmp`
            2 1 1 1 
            2 2 1 1 
            2 2 2 1 
            2 2 2 2 
            2 2 2 1 
            2 2 1 1 
            2 1 1 1 
            `, x, y - 3)
            }
            d = 2
        })
        controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
            if (pencilDown) {
                pencilDownDirection()
                y = (y + 124) % 120
                screen().drawBitmap(bmp`
            1 1 1 8 1 1 1 
            1 1 1 8 1 1 1 
            1 1 1 8 1 1 1 
            2 2 2 8 2 2 2 
            1 2 2 2 2 2 1 
            1 1 2 2 2 1 1 
            1 1 1 2 1 1 1 
            `, x - 3, y - 3)
            } else {
                pencilUpDirection()
                y = (y + 124) % 120
                screen().drawBitmap(bmp`
            2 2 2 2 2 2 2 
            1 2 2 2 2 2 1 
            1 1 2 2 2 1 1 
            1 1 1 2 1 1 1 
            `, x - 3, y)
            }
            d = 3
        })
        let shape = bmp`
    1 1 1 2 1 1 1 
    1 1 2 2 2 1 1 
    1 2 2 2 2 2 1 
    2 2 2 8 2 2 2 
    1 2 2 2 2 2 1 
    1 1 2 2 2 1 1 
    1 1 1 2 1 1 1 
    `
        x = 80
        y = 60
        screen().fill(1)
        screen().drawBitmap(shape, x - 3, y - 3)

    }

}
