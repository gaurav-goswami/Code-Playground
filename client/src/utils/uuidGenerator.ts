import {v4 as uuidV4} from "uuid";
import { IUuidGenerate } from "../Interface/Interface";

const generateRoomId : IUuidGenerate = () => {
    return new Promise((resolve, reject) => {
        const uuid = uuidV4();
        if(uuid) return resolve(uuid);
        return reject("")
    })
}

export default generateRoomId;