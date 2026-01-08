export default class countDown {
    constructor(futureDate) {
        this.futureDate = futureDate
    }

    transformDate() {
        return new Date(this.futureDate)
    }

    actualDate() {
        return new Date()
    }

    timeStampDiff() {
        return this.transformDate().getTime() - this.actualDate().getTime()
    }

    days() {
         return Math.floor(this.timeStampDiff() / (24 * 60 * 60 * 1000))
    }

     hours() {
         return (this.timeStampDiff() / (60 * 60 * 1000)) / 24
    }

}

