import ClassRoom from './0-classroom';

/**
 * Initialize an array of ClassRoom objects with specified sizes.
 * @Return [Array} Array of ClassRoom objects.
 */

export default function initializeRooms() {
  const newList = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
  return (newList);
};