/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */

function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  friends.forEach(item => {
    let liTags = document.createElement('li');
    liTags.textContent = `${item.firstName} ${item.lastName}`;
    ul.appendChild(liTags);
  });
  return ul;
}

