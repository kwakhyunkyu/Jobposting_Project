// 파라미터값 가져오기
document.addEventListener('DOMContentLoaded', async () => {
  getResumes();
});

// 모든 유저정보 가져오기
const getResumes = async () => {
  const jobseekerList = document.getElementById('jobseeker-list');

  const datas = await fetch('/api/resumes')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });

  datas.forEach((el) => {
    const column = document.createElement('div');
    column.innerHTML = `<div id="${el.id}" OnClick="location.href='/subpage/${el.user.id}/${el.id}'" class="jobseeker-card">
                          <img
                            class="jobseeker-img"
                            src="/img/userImg.jpg"
                            alt=""
                            srcset=""
                          />
                          <div class="jobseeker-info">
                            <div class="jobseeker-name">${el.user.name}</div>
                            <div class="jobseeker-job">${el.content}</div>
                          </div>
                        </div>`;
    jobseekerList.append(column);
  });
};

const logout = document.getElementById('logout');

logout.addEventListener('click', async () => {
  deleteCookie();
});

async function deleteCookie() {
  let isSuccess;
  await fetch('/api/auth/logout', {
    method: 'DELETE',
  })
    .then((el) => {
      isSuccess = el.ok;
    })
    .catch((e) => {
      console.log(e);
    });
  if (isSuccess) {
    alert('로그아웃 되었습니다.');
    location.href = '/';
  }
}
