export interface ClientOptions {
    /**These are the required options */

    /* The guild id of the voice channel */
    guildID: string;
    /* Guild channel id when will be played the song */
    voiceChannelID: string;
    /* Client volume else default = 50%*/
    volume?: number;

}