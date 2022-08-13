// @ts-check

export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
};

export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function(newX, newY) {
    this.x = newX;
    this.y = newY;
};

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    #adjustSize(size) {
        const maxWidth = this.screenSize.width - this.position.x;
        const maxHeight = this.screenSize.height - this.position.y;
        let newWidth = size.width;
        let newHeight = size.height;

        if (newWidth < 1) {
            newWidth = 1;
        } else if (newWidth > maxWidth) {
            newWidth = maxWidth;
        }

        if (newHeight < 1) {
            newHeight = 1;
        } else if (size.height > maxHeight) {
            newHeight = maxHeight;
        }

        return new Size(newWidth, newHeight);
    }

    resize(size) {
        const newSize = this.#adjustSize(size);

        this.size.resize(newSize.width, newSize.height);
    }

    #adjustPosition(position) {
        const maxX = this.screenSize.width - this.size.width;
        const maxY = this.screenSize.height - this.size.height;
        let newX = position.x;
        let newY = position.y;

        if (position.x < 0) {
            newX = 0;
        } else if (position.x > maxX) {
            newX = maxX;
        }

        if (position.y < 0) {
            newY = 0;
        } else if (position.y > maxY) {
            newY = maxY;
        }

        return new Position(newX, newY);
    }

    move(position) {
        const newPosition = this.#adjustPosition(position);

        this.position.move(newPosition.x, newPosition.y);
    }
}

export function changeWindow(window) {
    // Move to top left position to allow it to resize.
    window.move(new Position());

    window.resize(new Size(400, 300));
    window.move(new Position(100, 150));
    return window;
}