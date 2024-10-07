function filterList() {  
  const input = document.getElementById('tìm kiếm');  
  const filter = input.value.toLowerCase();  
  const ul = document.getElementById('danh sách');  
  const li = ul.getElementsByTagName('li');  

  for (let i = 0; i < li.length; i++) {  
      const txtValue = li[i].textContent || li[i].innerText;  
      if (txtValue.toLowerCase().indexOf(filter) > -1) {  
          li[i].style.display = '';  
      } else {  
          li[i].style.display = 'none';  
      }  
  }  
}  
