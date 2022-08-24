const Music = require("../models/music.model");
const musicsDataStore = require("./music.json");

class MusicRepository {
    async fetchAll() {
        const musics = [];
        for (let music of musicsDataStore) {
            let musicModel = new Music(
                music.RoleID,
                music.RoleName,
                music.RoleDesc
            );
            musics.push(musicModel);
        }
        return musics;
    }
}

module.exports = MusicRepository;
