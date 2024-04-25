import ClassRoom from './0-classroom';

/**
 * Initialize an array of ClassRoom objects with specified sizes.
 * @Return [Array} Array of ClassRoom objects.
 */

export default function initializeRooms() {
  const class1 = new ClassRoom(19);
  const class2 = new ClassRoom(20);
  const class3 = new ClassRoom(34);
  const newClass = [class1, class2, class3];

  return (newClass);
}
