# Momontom
1. 공통 조건 : 창을 나가도 사용자의 정보를 기억하고 불러온다. : localStorage




2. 기능 및 각 조건 :

- welcome User
      입력받은 텍스트를 사용자로 저장한다.
      + '로그아웃' 버튼을 만들어 localStorage에서 사용자 정보를 지운다.
      
- Clock
      Date를 이용하여 현재 시간을 나타낸다.
      숫자가 10 미만일 경우 십의 자리에 0을 넣는다.
      
- To do list
      '하는 중' 탭과 '완료' 탭이 있다.
      두 탭을 서로 이동할 수 있는 각각의 버튼이 있고, 삭제 버튼이 있다.
      + 입력한 텍스트가 탭의 크기를 넘어가지 않도록 한다.
      
- Weather API
      navigator api를 사용하여 사용자의 현재 좌표를 얻는다.
      openWeather API 페이지에서 가져온 api로 좌표의 날씨를 나타낸다.
      + 날씨 정보에서 아이콘 정보를 가져와 url로 첨가한다.




3. 진행하면서 어려웠던/아직 모르겠는 부분
 - css가 가장 어려웠음 : 상단바를 정렬할 때의 오른쪽 정렬이 안되어 결국 position relative, absolute 적용
 - To do list는 꾸준하게 생각해보면 좋지 않을까
 - Weather 정보에서 icon 가져오기 (이미지를 url로 가져오기)
 - 배열의 함수 중 splice
 - fetch.then
 - background Img 에서 효과줄때 쓰는 @keyframes
 - to do list에서 텍스트가 탭의 크기를 넘기지 않기




4. 결과상의 문제점
 - 창이 변할 때 크기 변화
 - css 부분을 정말 모르겠구만!
