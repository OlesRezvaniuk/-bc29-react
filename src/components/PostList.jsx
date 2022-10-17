export const PostList = () => {
  return (
    <>
      <h2 class="post-list-title">Post List</h2>
      <ul class="post-list">
        <li class="post-list-item">
          <img class="post-list-img" src="" alt="" />
          <h4 class="post-list-item-title">Post title</h4>
          <p class="post-list-item-text">Post text</p>
        </li>
      </ul>
    </>
  );
};

// Создайте в папке "src" папку "components".
// Создайте компонент "PostList", который будет представлять собой такую разметку:
// <h2 class="post-list-title">Post List</h2>
// <ul class="post-list">
//     <li class="post-list-item">
//         <img class="post-list-img" src="" alt="" />
//         <h4 class="post-list-item-title">Post title</h4>
//         <p class="post-list-item-text">Post text</p>
//     </li>
// </ul>
// Разумеется внутри списка постов будет не один элемент li, а много. Если нужно разделите компонент "PostList" на несколько компонентов. 6. Подумайте, какие props должен получать компонент "PostList" и его составные части и добавьте их в код.
