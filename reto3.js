function distributeGifts(packOfGifts, reindeers) {
    let totalGifts = 0;
    let totalRenos = 0;
    packOGifts.array.forEach(
        gift => totalGifts += gift.length
    );
reindeers.forEach(
    reinder => totalRenos += reinder.length * 2
);
    return Math.floor (totalRenos / totalGifts);
  }

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]
