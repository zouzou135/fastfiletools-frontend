import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import FileItem from "./FileItem";

type SortableFileItemProps = {
  id: string;
  file: File;
  index: number;
  lastIndex: number;
  onRemove: (index: number) => void;
  onMove?: (from: number, to: number) => void;
};

const SortableFileItem = ({
  id,
  file,
  index,
  lastIndex,
  onRemove,
  onMove,
}: SortableFileItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 9999 : "auto",
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <FileItem
        file={file}
        index={index}
        lastIndex={lastIndex}
        onRemove={onRemove}
        onMove={onMove}
      />
    </div>
  );
};

export default SortableFileItem;
