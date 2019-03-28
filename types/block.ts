export interface BlockMeta {
  version: number;
  prevBlockHashList: string[];
  blockLevel: number;
}

export interface Block<BlockData= any> {
  blockHash: string;
  data: BlockData;
  meta: BlockMeta;
} 