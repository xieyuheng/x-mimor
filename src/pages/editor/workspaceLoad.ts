import { Workspace } from './Workspace'
import { WorkspaceNodeDirectory } from './WorkspaceNode'
import { workspaceNodeDirectoryLoadChildren } from './workspaceNodeDirectoryLoadChildren'

export async function workspaceLoad(
  handle: FileSystemDirectoryHandle,
): Promise<Workspace> {
  const root: WorkspaceNodeDirectory = {
    kind: 'WorkspaceNodeDirectory',
    handle,
    relativePath: '',
    children: [],
  }

  root.children = await workspaceNodeDirectoryLoadChildren(root, root)

  return { root }
}
