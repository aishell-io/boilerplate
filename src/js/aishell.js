
/**
 * Check if logged in.
 */
const is_logged_in = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return true;
  }
  return false;
}

/**
 * Login link.
 */
const login_link = `
    <a href="login" class="btn btn-ghost btn-md text-lg rounded-btn normal-case">
      Login
    </a>`;

/**
 * Avatar with dropdown menu.
 * @returns Dropdown avatar html
 */
const gen_dropdown_avatar = () => {
  const template = document.createElement('template');
  const htmlString = `
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="svg/anonymous.svg" />
            </div>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
            <li>
              <a class="justify-between">
                Profile
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>`;
  template.innerHTML = htmlString;
  //return template.content.childNodes[0];
  return htmlString;
}

// Listeners

const userinfo_wrapper = document.querySelector('#userinfo-wrapper');
//const dropdown = gen_dropdown_avatar();
const login = login_link;
const dropdown = login;
userinfo_wrapper.insertAdjacentHTML('beforeend', dropdown);

// Listen iframes
window.onmessage = (ev) => {
  if (ev.data === 'loginok') {
    console.log('tai gooo了！！！')
    //window.location.replace('/login');
  }
}
