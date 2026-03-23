export const useDragScrollVertical = () => {
  const scrollContainer = ref<HTMLDivElement | null>(null);
  let isDown = false;
  let startY = 0;
  let scrollTop = 0;

  const onMouseDown = (e: MouseEvent) => {
    isDown = true;
    if (!scrollContainer.value) return;
    startY = e.pageY - scrollContainer.value.offsetTop;
    scrollTop = scrollContainer.value.scrollTop;
  };

  const onMouseLeave = () => {
    isDown = false;
  };

  const onMouseUp = () => {
    isDown = false;
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    if (!scrollContainer.value) return;
    const y = e.pageY - scrollContainer.value.offsetTop;
    const walk = (y - startY) * 2;
    scrollContainer.value.scrollTop = scrollTop - walk;
  };

  return { scrollContainer, onMouseDown, onMouseLeave, onMouseUp, onMouseMove };
};
