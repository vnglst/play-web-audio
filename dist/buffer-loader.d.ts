declare class BufferLoader {
    context: AudioContext;
    urlList: string[];
    onload: (bufferList: AudioBuffer[]) => void;
    bufferList: AudioBuffer[];
    loadCount: number;
    constructor(context: AudioContext, urlList: string[], callback: (bufferList: AudioBuffer[]) => void);
    load(): void;
    private loadBuffer;
}
export default BufferLoader;
