import path from "path"
import AvatarModel from "./avatar/model";
import LinkModel from "./link/model";

const {ethers} = require("ethers")

const CONTRACT_ADDRESS = "0xA6C7382372ca0e8122D052dC61b4f3e45ADd79da"
const SOCKET_PROVIDER_URL = 'wss://eth-sepolia.g.alchemy.com/v2/BAugV-W_ih2DG7C3nwVrQqLu6EGBuG-y'

// const ABI = require(path.join(__dirname, 'MetaLinks.json'))
import {abi} from './MetaLinks.json'

console.log("abi ", abi);


export default class ChainWorker {
    provider: any
    contract: any

    constructor() {
        this.initialize()
        this.startWatcher()
    }

    initialize() {
        this.provider = new ethers.WebSocketProvider(SOCKET_PROVIDER_URL);
        this.contract = new ethers.Contract(CONTRACT_ADDRESS, abi, this.provider);
    }

    async startWatcher() {
        console.log("starting watcher");
        
        this.contract.on("AvatarCreatedAvatarCreated", (avatarID, name, aka, bio, avatar, bgAvatar, active, event)=>{
            let transferEvent ={
                avatarID, name, aka, bio, avatar, bgAvatar, active,
            }
            console.log("event ", event);
            console.log(JSON.stringify(transferEvent, null, 4))
        })
        
        this.contract.on("AvatarAddressesAdded", (avatarID, newAddresses, event)=>{
            let transferEvent ={
                avatarID, newAddresses,
            }
            console.log("event ", event);
            console.log(JSON.stringify(transferEvent, null, 4))
        })

        this.contract.on("MetaLinkAdded", (avatarID, newMetaLinkID, name, aka, bio, universe, link, avatar, bgAvatar, active, event)=>{
            let transferEvent ={
                avatarID, newMetaLinkID, name, aka, bio, universe, link, avatar, bgAvatar, active,
            }
            console.log("event ", event);
            console.log(JSON.stringify(transferEvent, null, 4))
        })

        const avatar = await this.contract.idToAvatar(1)
        console.log("avatar ", avatar)
    }

    async getAvatar(id: number) {
        try {
            const avatar = await this.contract.idToAvatar(id)
            console.log("avatar ", avatar)

            return avatar
        } catch (error) {
            console.log("error", error)
        }
    }

    async saveAvatar(data) {
        await new AvatarModel({ ...data })
    }
    
    async saveLink(data) {
        await new LinkModel({ ...data })
    }
    
    async addAvatarAddress(id: string, addresses: string[]) {
        const avatar = await AvatarModel.findOne({ chainId: id })

        const newAddresses = [ ...new Set([ ...avatar.addresses, addresses ]) ]

        AvatarModel.findByIdAndUpdate({ chainId: id}, { addresses: newAddresses })
    }
}


