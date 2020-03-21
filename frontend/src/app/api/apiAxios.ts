import axios, {AxiosResponse} from 'axios';
import { IPlayer } from '../../models/player';

axios.defaults.baseURL = 'http://localhost:5000/api';
const _playersURL_ = '/players';

const responseData = (res: AxiosResponse) => res.data;

const gateway = {
    get: (url: string) => axios.get(url).then(responseData),
    post: (url: string, body: {}) => axios.post(url, body).then(responseData).catch((error) => console.log( error.response.request._response ) ),
    put: (url: string, body: {}) => axios.put(url, body).then(responseData),
    delete: (url: string) => axios.delete(url).then(responseData)
}

const players = {
  create: (player: IPlayer) => gateway.post('/players', player),
  read: (id: string) => gateway.get(_playersURL_+`${id}`),
  update: (player: IPlayer) => gateway.put(_playersURL_+`/${player.id}`, player),
  delete: (id: string) => gateway.delete(_playersURL_+`/${id}`),
  all: (): Promise<IPlayer[]> => gateway.get(_playersURL_),
}

export default { players } 
