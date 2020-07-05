export type TODO_any = any;

interface BaseNode<T> {
  type: T;
  name: string;
}

// ファイルは type と name のみを持つ
export interface FileNode extends BaseNode<"file"> {}
// ディレクトリは追加でノードの配列を持つ
export interface DirectoryNode extends BaseNode<"directory"> {
  children: TreeNode[];
}
// toy-tree で扱う全ノードのいずれかを表す union 型
export type TreeNode = FileNode | DirectoryNode | SymlinkNode;

export interface Options {
  level: number;
}

export interface SymlinkNode extends BaseNode<'symlink'> {
  link: string
}
