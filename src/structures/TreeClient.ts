import { ClientOptions } from './../../typings/TreeOptions.d';

export default class TreeClient<T = unknown> {

    /**
     * @param options 
     * @type ClientOptions
     */
    public readonly options: ClientOptions;

    public constructor(options: ClientOptions) {
        
    }

    /**
     * @param volume
     * volume -> volume
     * volume.set(number) -> void set volume
     */
    public async volume(): Promise<any> {
        let set = async (volume: number) => {
            return this.options.volume = volume;
        }

        return this.options.volume;
    }
}