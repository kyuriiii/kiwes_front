export const langList = [
  {key: 'KO', text: '한국어', simple: '한국어'},
  {key: 'EN', text: 'English', simple: 'English'},
  {key: 'JP', text: '日本語', simple: '日本語'},
  {key: 'CH1', text: '中文(简体)', simple: '中文(简体)'},
  {key: 'CH2', text: '中文(繁體)', simple: '中文(繁體)'},
  {key: 'FR', text: 'Français', simple: 'Français'},
  {key: 'ES', text: 'Español', simple: 'Español'},
  {key: 'DE', text: 'Deutsch', simple: 'Deutsch'},
  {key: 'RU', text: 'Tiếng Việt', simple: 'Tiếng Việt'},
  {key: 'VN', text: 'Pyccкий', simple: 'Pyccкий'},
  {key: 'OTHER', text: '기타', simple: '기타'},
];
export const categoryList: {key: string; text: string; simple: string}[] = [
  {key: 'KPOP', text: '🎧K-pop', simple: 'K-pop'},
  {key: 'CAFE', text: '🍔맛집/카페', simple: '맛집/카페'},
  {key: 'STUDY', text: '📚스터디', simple: '스터디'},
  {key: 'TRAVEL', text: '✈️여행', simple: '여행'},
  {key: 'KOREAN_CULTURE', text: '🇰🇷한국 문화', simple: '한국 문화'},
  {key: 'MOVIE', text: '🎬영화/드라마/애니', simple: '영화/드라마/애니'},
  {key: 'PARTY', text: '🎉파티/클럽', simple: '파티/클럽'},
  {key: 'GAME', text: '🎮게임/보드게임', simple: '게임/보드게임'},
  {key: 'CULTURE', text: '🎟️문화/전시/공연', simple: '문화/전시/공연'},
  {key: 'DRINK', text: '🍺술', simple: '술'},
  {key: 'SPORTS', text: '🏀스포츠', simple: '스포츠'},
  {key: 'CRAFT', text: '🎨공예/그림', simple: '공예/그림'},
  {key: 'VOLUNTEER', text: '❤️봉사활동', simple: '봉사활동'},
  {key: 'OTHER', text: '🥝기타', simple: '기타'},
];

export const allCategoryList = [
  {key: 'ALL', text: '전체', simple: '전체'},
].concat(categoryList);

export enum LANGUAGE {
  KO = 'KO',
  EN = 'EN',
}
export const categoryIcon = {
  KPOP: require('../../assets/images/icon/KPOP.png'),
  CAFE: require('../../assets/images/icon/CAFE.png'),
  CULTURE: require('../../assets/images/icon/CULTURE.png'),
  DRINK: require('../../assets/images/icon/DRINK.png'),
  OTHER: require('../../assets/images/icon/OTHER.png'),
  VOLUNTEER: require('../../assets/images/icon/VOLUNTEER.png'),
  PARTY: require('../../assets/images/icon/PARTY.png'),
  KOREAN_CULTURE: require('../../assets/images/icon/KOREAN_CULTURE.png'),
  STUDY: require('../../assets/images/icon/STUDY.png'),
  TRAVEL: require('../../assets/images/icon/TRAVEL.png'),
  CRAFT: require('../../assets/images/icon/CRAFT.png'),
  SPORTS: require('../../assets/images/icon/SPORTS.png'),
  MOVIE: require('../../assets/images/icon/MOVIE.png'),
  GAME: require('../../assets/images/icon/GAME.png'),
};
export const translateText: any = {
  '이미 존재하는 닉네임 입니다':
    'This username isn’t available. Please try another.',
  '인기 모임': ' Popular Meetups',
  공지: 'Notice',
  '추천 모임': 'Recommendation',
  '카테고리 선택': 'Select Category',
  '언어 선택': 'Select Language',
  'KiWES 시작하기': 'KiWES START',
  '카카오로 시작하기': 'Start With Kakao',
  '프로필 설정': 'Profile Setting',
  '프로필 이미지': 'Profile Image',
  '프로필 이미지 (선택)': 'Profile Image (Optional)',
  다음: 'Next',
  이전: 'Prev',
  '기본 이미지': 'Default Image',
  '갤러리에서 가져오기': 'Choose from Gallery',
  닉네임: 'Username',
  '닉네임 입력': 'Your Username',
  중복확인: 'Check Availability',
  '닉네임은 한글, 영어 포함 15 byte 이내로 작성해주세요.':
    'Write your username within 15 bytes including Korean and English',
  '사용 가능한 닉네임 입니다': 'Available Username',
  '확인 완료되었습니다': 'Verification is complete',
  생년월일: 'Date of birth',
  클릭해주세요: 'Click here',
  '자기소개 (선택)': 'Bio(Optional)',
  '간단하게 본인을 소개해주세요 :)': 'Brief introduction of myself :)',
  '설정 완료': 'Complete',
  기본설정: 'Preferences',
  '본인의 국적을 선택해주세요': 'Select your nationality',
  한국인: 'Korean',
  외국인: 'Foreigner',
  아시아: 'Asia',
  유럽: 'Europe',
  아프리카: 'Africa',
  북아메리카: 'North America',
  남아메리카: 'South America',
  오세아니아: 'Oceania',
  기타: 'Others',
  '한국 문화': 'K-Culture',
  '맛집/카페': 'Restaurant/Cafe',
  스포츠: 'Sports',
  '문화/전시/공연': 'Exhibition/Show',
  여행: 'Travel',
  스터디: 'Study',
  '게임/보드게임': 'Game/Board Game',
  '파티/클럽': 'Party/Club',
  술: 'Drink',
  '영화/드라마/애니': 'Movie/Drama/Anime',
  '공예/그림': 'Craft/Painting',
  봉사활동: 'Volunteer Work',
  '검색어를 입력하세요': 'Search',
  '최근 검색어': 'Recent',
  지우기: 'Delete',
  '인기 검색어': 'Top Searches',
  알림: 'Notifications',
  승인: 'Approval',
  거절: 'Deny',
  오늘: 'Today',
  어제: 'Yesterday',
  '이번 주': 'This week',
  '이전 활동': 'Earlier',
  '10시간': '10h',
  '1일': '1d',
  '10주': '10w',
  '승인 요청': 'Request Approval',
  보기: 'View',
  '내 모임 모두 보기': 'View All My Meetups',
  '승인 대기': 'Waiting for Approval',
  '대기중인 모임 모두 보기': 'View All Waiting Meetups',
  '내 모임': 'My Meetups',
  '대기 중인 모임': 'Waiting Meetups',
  '채팅 내역이 없습니다': 'There is no chat history',
  '지정된 모임 날짜 14일 후에는 채팅방이 자동으로 삭제됩니다':
    'The chat room will be automatically deleted 14 days after the designated Meetups date',
  '전체 복사': 'Copy All',
  '선택 복사': 'Copy Selection',
  '번역하기/원본보기': 'Translate/View Original',
  '탈퇴 즉시 회원 정보가 삭제되며, 삭제된 데이터는 복구할 수 없습니다. 탈퇴 후 30일간은 재가입이 불가합니다':
    'Your membership information will be immediately deleted, and cannot be recovered. Rejoining is not allowed within 30 days',
  대화상대: 'Members',
  '모임 개설': 'Create Meetups',
  '모임 수정': 'Edit Meetups',
  '모임에서 사용할\n언어를 골라주세요': 'Select the language',
  '모임의 카테고리를\n골라주세요': 'Select the Category',
  '모임의 날짜와 마감일,\n장소를 알려주세요':
    'Provide the date, deadline, and location of the Meetups',
  '모임의 정보를\n입력해주세요': 'Enter the information about the Meetups',
  '모집 마감일': 'Deadline',
  장소: 'Place',
  '모임 인원': 'The number of participants',
  '모집 성별': 'Recruitment Gender',
  성별: 'Gender',
  남: 'M',
  여: 'F',
  '기본 정보': 'Basic Information',
  '대표 이미지를 업로드해주세요\n(파일 크기 최대 10MB)':
    'Upload the representative image\n(maximum file size: 10MB)',
  '모임 소개': 'Meetups Introduction',
  등록: 'Register',
  취소하기: 'Cancel',
  취소: 'Cancel',
  확인: 'Confirm',
  '모임 날짜': 'Date',
  '모집 마감': 'Deadline',
  '인당 예상비용': 'Cost/N',
  '참여 모임': 'All',
  '개설 모임': 'My',
  후기: 'Review',
  '이용 약관': 'Terms and Conditions Agreement',
  '언어 설정': 'Language Setting',
  설정: 'Settings',
  '개인정보 처리방침': 'Privacy Policy Agreement',
  'DM으로 문의하기': 'Inquire via Instagram DM',
  로그아웃: 'Log out',
  탈퇴하기: 'Leave the App',
  '기본 설정': 'Preferences',
  // '본인의 국적을\n선택해주세요.': 'Select your nationality',

  // 글 상세 페이지
  '호스트 정보': 'Host Information',
  '참가 인원': 'Participants',
  '모집 인원': 'The max capacity',
  참여하기: 'JOIN',
  '참여 취소': 'Cancel',

  '로그아웃하시겠습니까?': 'Do you want to log out?',

  전체: 'All',
  수정: 'Edit',
  수정하기: 'Edit',
  삭제하기: 'Delete',

  '조회 가능한 모임이 없어요!': 'There are no Meetups!',
  'Host는 채팅방 퇴장이 불가합니다!': 'Host can’t leave the chat room',
  '작성된 후기가 없어요!': 'There are no Reviews!',
  '작성된 문의가 없어요!': 'There are no Q&A!',
  '승인 신청자가 아직 없어요!': 'There are no applicants for approval!',

  '클립보드 저장 완료!': 'Save to clipboard complete!',
  '친구들과 함께 모임을 즐겨보세요!': 'Enjoy the gathering with your friends!',

  '!무분별한 퇴장을 삼가주세요!':
    '!Please refrain from leaving indiscriminately!',
  '탈퇴 즉시 회원 정보는 삭제되며,\n 탈퇴 후 30일간 재가입이 불가합니다.':
    'Your membership information will be immediately deleted, and cannot be recovered. Rejoining is not allowed within 30 days. ',
};
