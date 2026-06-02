import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #videos = new Map()

    list(search) {
        return Array.from(this.#videos.entries())
            .map(([id, data]) => ({ id, ...data }))
            .filter(video => search ? video.title.includes(search) : true)
    }

    create(video) {
        const videoId = randomUUID()
        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}