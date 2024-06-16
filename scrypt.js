// Визначаємо функції displayContent та createSubMenu у глобальному контексті
function displayContent(labNumber) {
    // console.log("Функція displayContent викликається з номером роботи:", labNumber);

    // Очистити попередній вміст
    document.querySelector(".test").innerHTML = "";
    document.getElementById("lab-content").innerHTML = "";

    // Змінна для збереження змісту лабораторної роботи
    let labContent = "";

    // Визначити зміст в залежності від номера лабораторної роботи
    if (labNumber === 1) {
        // Встановити зміст лабораторної роботи для першої роботи
        labContent = `
            <h3>Лабораторна робота № 1</h3>
        `;
        // Створити меню змісту для першої роботи
        createSubMenu(1);
    }
    if (labNumber === 2) {
        labContent = `
            <h3>Лабораторна робота № 2</h3>
        `;
        createSubMenu(2);
    }

    if (labNumber === 3) {
        labContent = `
            <h3>Лабораторна робота № 3</h3>
        `;
        createSubMenu(3);
    }

    if (labNumber === 4) {
        labContent = `
            <h3>Лабораторна робота № 4</h3>
        `;
        createSubMenu(4);
    }

    if (labNumber === 5) {
        labContent = `
            <h3>Лабораторна робота № 5</h3>
        `;
        createSubMenu(5);
    }

    if (labNumber === 6) {
        labContent = `
            <h3>Лабораторна робота № 6</h3>
        `;
        createSubMenu(6);
    }

    if (labNumber === 7) {
        labContent = `
            <h3>Лабораторна робота № 7</h3>
        `;
        createSubMenu(7);
    }

    if (labNumber === 8) {
        labContent = `
            <h3>Лабораторна робота № 8</h3>
        `;
        createSubMenu(8);
    }
    if (labNumber === 9) {
        labContent = `
            <h3>Лабораторна робота № 9</h3>
        `;
        createSubMenu(8);
    }
    // Вивести зміст лабораторної роботи в відповідний блок
    document.getElementById("lab-content").innerHTML = labContent;

    // Після створення меню змісту налаштовуємо розміри кнопок
    adjustButtonSizes();
}

function createSubMenu(labNumber) {
    let menu = document.querySelector(".test");
    console.log(menu)
    // Тут можна додати кнопки для меню змісту
    if (labNumber === 1) {

    let button1 = document.createElement("button");
    button1.textContent = "Опис предметного середовища";
    button1.onclick = function() {
        displaySubMenuContent("Опис предметного середовища");
    };
    menu.appendChild(button1);

    let button2 = document.createElement("button");
    button2.textContent = "Тема Мета Місце розташування ЛР №1";
    button2.onclick = function() {
        displaySubMenuContent("Тема Мета Місце розташування ЛР №1");
    };
    menu.appendChild(button2);

    let button3 = document.createElement("button");
    button3.textContent = "СТРУКТУРА ДОКУМЕНТУ";
    button3.onclick = function() {
        displaySubMenuContent("СТРУКТУРА ДОКУМЕНТУ");
    };
    menu.appendChild(button3);

    let button4 = document.createElement("button");
    button4.textContent = "HTML-код ТАБЛИЦЬ";
    button4.onclick = function() {
        displaySubMenuContent("HTML-код ТАБЛИЦЬ");
    };
    menu.appendChild(button4);

    let button5 = document.createElement("button");
    button5.textContent = "HTML-код ФОРМИ";
    button5.onclick = function() {
        displaySubMenuContent("HTML-код ФОРМИ");
    };
    menu.appendChild(button5);

    let button6 = document.createElement("button");
    button6.textContent = "HTML-код ЗОБРАЖЕННЯ";
    button6.onclick = function() {
        displaySubMenuContent("HTML-код ЗОБРАЖЕННЯ");
    };
    menu.appendChild(button6);

    let button7 = document.createElement("button");
    button7.textContent = "ВИСНОВКИ";
    button7.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ");
    };
    menu.appendChild(button7);
}

else if (labNumber === 2) {
    
    let button21 = document.createElement("button");
    button21.textContent = "Тема, мета ЛР №2. Місце розташування сайту, звіту";
    button21.onclick = function() {
        displaySubMenuContent("Тема, мета ЛР №2. Місце розташування сайту, звіту");
    };
    menu.appendChild(button21);

    let button22 = document.createElement("button");
    button22.textContent = "Способи підключення стилів";
    button22.onclick = function() {
        displaySubMenuContent("Способи підключення стилів");
    };
    menu.appendChild(button22);

    let button23 = document.createElement("button");
    button23.textContent = "СЕЛЕКТОРИ";
    button23.onclick = function() {
        displaySubMenuContent("СЕЛЕКТОРИ");
    };
    menu.appendChild(button23);

    let button24 = document.createElement("button");
    button24.textContent = "Селектори тегу";
    button24.onclick = function() {
        displaySubMenuContent("Селектори тегу");
    };
    menu.appendChild(button24);

    let button25 = document.createElement("button");
    button25.textContent = "Селектори класу";
    button25.onclick = function() {
        displaySubMenuContent("Селектори класу");
    };
    menu.appendChild(button25);

    let button26 = document.createElement("button");
    button26.textContent = "Селектори ідентифікаторів";
    button26.onclick = function() {
        displaySubMenuContent("Селектори ідентифікаторів");
    };
    menu.appendChild(button26);

    let button27 = document.createElement("button");
    button27.textContent = "Інші селектори";
    button27.onclick = function() {
        displaySubMenuContent("Інші селектори");
    };
    menu.appendChild(button27);

    let button28 = document.createElement("button");
    button28.textContent = "CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки";
    button28.onclick = function() {
        displaySubMenuContent("CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки");
    };
    menu.appendChild(button28);

    let button29 = document.createElement("button");
    button29.textContent = "ВИСНОВКИ до ЛР №2";
    button29.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ до ЛР №2");
    };
    menu.appendChild(button29);
}

else if (labNumber === 3) {
    
    let button301 = document.createElement("button");
    button301.textContent = "Тема, мета ЛР №3. Місце розташування сайту, звіту";
    button301.onclick = function() {
        displaySubMenuContent("Тема, мета ЛР №3 Місце розташування сайту, звіту");
    };
    menu.appendChild(button301);

    let button302 = document.createElement("button");
    button302.textContent = "ЗАВДАННЯ №1 Зовнішній вигляд макету. Код макету";
    button302.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №1 Зовнішній вигляд макету. Код макету");
    };
    menu.appendChild(button302);

    let button303 = document.createElement("button");
    button303.textContent = "ЗАВДАННЯ №2";
    button303.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №2");
    };
    menu.appendChild(button303);

    let button304 = document.createElement("button");
    button304.textContent = "Фіксована таблична верстка";
    button304.onclick = function() {
        displaySubMenuContent("Фіксована таблична верстка");
    };
    menu.appendChild(button304);

    let button305 = document.createElement("button");
    button305.textContent = "Гумова таблична верстка";
    button305.onclick = function() {
        displaySubMenuContent("Гумова таблична верстка");
    };
    menu.appendChild(button305);

    let button306 = document.createElement("button");
    button306.textContent = "Фіксована блокова верстка";
    button306.onclick = function() {
        displaySubMenuContent("Фіксована блокова верстка");
    };
    menu.appendChild(button306);

    let button307 = document.createElement("button");
    button307.textContent = "Гумова блокова верстка";
    button307.onclick = function() {
        displaySubMenuContent("Гумова блокова верстка");
    };
    menu.appendChild(button307);

    let button308 = document.createElement("button");
    button308.textContent = "ЗАВДАННЯ №3 FLEXBOX";
    button308.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №3 FLEXBOX");
    };
    menu.appendChild(button308);

    let button309 = document.createElement("button");
    button309.textContent = "Зовнішній вигляд сторінки";
    button309.onclick = function() {
        displaySubMenuContent("Зовнішній вигляд сторінки");
    };
    menu.appendChild(button309);

    let button310 = document.createElement("button");
    button310.textContent = "HTML-код";
    button310.onclick = function() {
        displaySubMenuContent("HTML-код");
    };
    menu.appendChild(button310);

    let button311 = document.createElement("button");
    button311.textContent = "CSS-код сторінки";
    button311.onclick = function() {
        displaySubMenuContent("CSS-код сторінки");
    };
    menu.appendChild(button311);

    let button312 = document.createElement("button");
    button312.textContent = "ВИСНОВКИ до ЛР №3";
    button312.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ до ЛР №3");
    };
    menu.appendChild(button312);
}

else if (labNumber === 4) {
    
    let button401 = document.createElement("button");
    button401.textContent = "Тема, мета ЛР №4. Місце розташування сайту, звіту";
    button401.onclick = function() {
        displaySubMenuContent("Тема, мета ЛР №4 Місце розташування сайту, звіту");
    };
    menu.appendChild(button401);

    let button402 = document.createElement("button");
    button402.textContent = "ЗАВДАННЯ №1 Визначення брейкпоінтів";
    button402.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №1 Визначення брейкпоінтів");
    };
    menu.appendChild(button402);

    let button403 = document.createElement("button");
    button403.textContent = "ЗАВДАННЯ №2 Виконання адаптивної верстки";
    button403.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №2 Виконання адаптивної верстки");
    };
    menu.appendChild(button403);

    let button404 = document.createElement("button");
    button404.textContent = "ЗАВДАННЯ №3 Пояснення створених версій";
    button404.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №3 Пояснення створених версій");
    };
    menu.appendChild(button404);

    // let button405 = document.createElement("button");
    // button405.textContent = "Альтернативне рішення";
    // button405.onclick = function() {
    //     displaySubMenuContent("Альтернативне рішення");
    // };
    // menu.appendChild(button405);


    let button406 = document.createElement("button");
    button406.textContent = "ВИСНОВКИ до ЛР №4";
    button406.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ до ЛР №4");
    };
    menu.appendChild(button406);
}

}




// Викликаємо функцію після завантаження сторінки
window.onload = function() {
    // Викликаємо функцію displayContent з номером 1 при завантаженні сторінки
    displayContent(1);
};

function adjustButtonSizes() {
    // Отримання всіх кнопок
    const buttons = document.querySelectorAll(".info-display button");

    // Знаходження максимальної ширини кнопки
    let maxWidth = 0;
    buttons.forEach(button => {
        const buttonWidth = button.offsetWidth;
        if (buttonWidth > maxWidth) {
            maxWidth = buttonWidth;
        }
    });

    // Застосування максимальної ширини до всіх кнопок
    buttons.forEach(button => {
        button.style.width = `${maxWidth}px`;
    });
}

function displaySubMenuContent(buttonText) {
    let contentHTML = ""; // Рядок, в якому буде зберігатися HTML-структура для вмісту

    // Відповідно до тексту кнопки створюємо відповідний вміст
    switch (buttonText) {
        case "Опис предметного середовища":
            contentHTML = `
                    <h2>Опис предметного середовища</h2>
                    <ol>
                        <li>Створення інтернет сайту для зберігання інформації про рахунки користувача.</li>
                        <li>Узагальнений опис функціоналу:</li>
                        <ul type="">
                            <li>Реєстрація та вхід в обліковий запис</li>
                            <li>Навігація та пошук</li>
                            <li>Список рахунків</li>
                            <li>Додавання рахунків</li>
                            <li>Видалення рахунків</li>
                            <li>Редагування рахунків</li>
                            <li>Адміністративний розділ</li>
                            <li>Контактна інформація (зворотній зв’язок)</li>
                        </гl>
                    </ol>
                    <h3>Функціонал адміністратора:</h3>
                    <ol>
                        <li>Управління рахунками(без можливості бачити інформацію про них)
                        </li>
                        <li>Управління користувачами:
                            <ul>
                                <li>Реєстрація нових користувачів.</li>
                                <li>Перегляд інформації про користувачів.</li>
                                <li>Видалення користувачів або блокування їхніх облікових записів.</li>
                            </ul>
                        </li>
                        <li>Звіти та аналітика:
                            <ul>
                                <li>Перегляд статистики продажів та замовлень.</li>
                                <li>Генерація звітів за потрібними періодами часу або категоріями товарів.</li>
                            </ul>
                        </li>
                    </ol>
                    
                    <h3>Функціонал користувача:</h3>
                    <ol>
                        <li>Перегляд рахунків:
                            <ul>
                                <li>Перегляд списку рахунків</li>
                                <li>Фільтрація та сортування рахунків за різними критеріями.</li>
                            </ul>
                        </li>
                        <li>Взаємодія з рахунками:
                            <ul>
                                <li>Доавання</li>    
                                <li>Видалення</li>    
                                <li>Редагування</li>    
                            </ul>
                        </li>
                        <li>Особистий кабінет:
                            <ul>
                                <li>Реєстрація нового користувача; вхід в особистий кабінет.</li>
                                <li>Редагування особистої інформації.</li>
                            </ul>
                        </li>
                    </ol>             
            `;
            break;
        case "Тема Мета Місце розташування ЛР №1":
            contentHTML = `
                <h3>Тема</h3>
                <p>СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ.РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ</p>

                <h3>Мета </h3>
                <p>Придбати практичні навички роботи  з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.</p>

                <h3>Місце розташування ЛР №1</h3>
                <p>Розміщено на GitHub</p>
                <p><a href="" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://github.com/SerAvram/webProject1" target="_blank">Проект.</a> <a href="https://seravram.github.io/webProject1/" target="_blank">Сайт проекту.</a></p>
                <p><a href="https://github.com/SerAvram/webresume" target="_blank">Резюме.</a> <a href="https://seravram.github.io/webresume/" target="_blank">Сайт резюме.</a></p>

            `;
            break;
        case "СТРУКТУРА ДОКУМЕНТУ":
            contentHTML = `
                <h3>СТРУКТУРА</h3>
                <p>HTML-код ТАБЛИЦЬ.</p>
                <p>HTML-код ФОРМИ.</p>
                <p>HTML-код ЗОБРАЖЕННЯ.</p>

            `;
            break;

        case "HTML-код ТАБЛИЦЬ":
            contentHTML = `
                 <table>
                    <tr>
                        <th>№</th>
                        <th>Банк</th>
                        <th>Рахунок</th>
                        <th>Сумма</th>
                        <th>Процент</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Пріват</td>
                        <td>99999999999</td>
                        <td>100</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Моно</td>
                        <td>444444444444</td>
                        <td>1400</td>
                        <td>15</td>
                    </tr>
                </table>

                    <h3>HTML-код ТАБЛИЦЬ</h3>
                        <pre>
                            <code>
                                <img src="table.png" alt="photo"> 
                            </code>
                        </pre>
            `;
            break;
            
        case "HTML-код ФОРМИ":
            contentHTML = `
                    <form action="">
                    <div>
                        <label for="">Login</label>
                        <input type="text">
                    </div>
                    <div class="">
                        <label for="">Password</label>
                        <input type="text">
                    </div>
                    <input type="submit">
                </form>

                <h3>HTML-код ФОРМИ</h3>
                <pre> 
                    <code>
                        <img src="auth.png" alt="photo"> 
                    </code>
                </pre>
            `;
            break;

        case "HTML-код ЗОБРАЖЕННЯ":
            contentHTML = `
                <img src="photo1.png" alt="" class="logo">

                <h3>Фото з описом</h3>
                <pre>
                    <code>
                        &lt;img src="photo1.png" alt="" class="logo "&gt;
                    </code>
                </pre>
            `;
            break;

        case "ВИСНОВКИ":
            contentHTML = `
                <h3>ВИСНОВКИ</h3>
                <p>В ході виконання лабораторної роботи було створенно HTML сторінку для майбутнього сайту</p>
            `;
            break;

        case "Тема, мета ЛР №2. Місце розташування сайту, звіту":
            contentHTML = `
                <h3>Тема, мета ЛР №2. Місце розташування сайту, звіту</h3>
                <p>Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.</p>

                <p>Мета: придбати практичні навички роботи  з селекторами, ідентифікаторами, списками,  різноманітними властивостями кольору і фону,  
                зовнішними та внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів.</p>

                <h3>Місце розташування ЛР №2</h3>
                <p>Розміщено на GitHub</p>
                <p><a href="" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://seravram.github.io/WebProjectN2/" target="_blank">Проект.</a> <a href="https://github.com/SerAvram/WebProjectN2" target="_blank">Сайт проекту.</a></p>
                
            `;
            break;

        case "Способи підключення стилів":
            contentHTML = `
                <h3>Способи підключення стилів</h3>
                <p>Вбудований CSS: Стилі можна включати безпосередньо в HTML-документ за допомогою тегу <style>. 
                Вбудований CSS також можна використовувати в тегах за допомогою атрибута style.  </p>

                <p>Зовнішній CSS: Стилі можна розмістити у зовнішньому файлі CSS і підключити їх до HTML-документу за допомогою тегу <link>.</p>

                <p>Використання JavaScript для динамічного додавання стилів: Ви можете використовувати JavaScript для створення або зміни стилів динамічно. </p>
                              
            `;
            break;
        
        case "СЕЛЕКТОРИ":
            contentHTML = `
                <h3>СЕЛЕКТОРИ</h3>

                <p>Селектори тегу</p>
                
                <p>Селектори класу</p>

                <p>Селектори ідентифікаторів</p>

                <p>Селектори сусідні</p>

                <p>Селектори атрибута </p>

                <p>Селектори універсальні</p>

                <p>Селектори дочірні</p>

                              
            `;
            break;

            case "Селектори тегу":
                contentHTML = `
                    <h3>Селектори тегу</h3>    
                    <img src="tsel.png">                 
                    
                                  
                `;
                break;
            case "Селектори класу":
            contentHTML = `
                <h3>Селектори класу</h3>
                <img src="csel.png">  
                                              
                `;
                break;

            case "Селектори ідентифікаторів":
            contentHTML = `
                <h3>Селектори ідентифікаторів</h3>
                <img src="isel.png">   
                                              
                `;
                break;

            case "Інші селектори":
            contentHTML = `
                <h3>Інші селектори</h3>
                <img src="sel.png">     
                `;
                break;

            case "CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки":
            contentHTML = `
                <h3>CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки</h3>

                <p>Шрифти </p>
                <img src="font.png" alt="sr11">
                <img src="font1.png" alt="sr12">                
                <p>Текст </p>
                <img src="text.png" alt="sr21">
                <img src="text1.png" alt="sr22">
                <p>Таблиці </p>
                <img src="table2.png" alt="sr31">
                <img src="table3.png" alt="sr32">
                <p>Фон</p>
                <img src="backimg.png" alt="sr41">
                <img src="backimg1.png" alt="sr42">
                <p>Контур</p>
                <img src="out.png" alt="sr51">
                <img src="out1.png" alt="sr52">
                <p>Списки</p>
                <img src="list.png" alt="sr61"> 
                `;
                break;

            case "ВИСНОВКИ до ЛР №2":
            contentHTML = `
                <h3>ВИСНОВКИ до ЛР №2</h3>

                <p>В ході виконання лабораторної роботи набуто ознайомленно з селекторами, 
                ідентифікаторами, списками,  різноманітними властивостями 
                кольору і фону,  зовнішними та внутрішними  відступами,  
                плаваючими елементами, оформленням текстових елементів.</p>
                
                `;
                break;

        case "Тема, мета ЛР №3 Місце розташування сайту, звіту":
        contentHTML = `
            <h3>Тема, мета ЛР №3. Місце розташування сайту, звіту</h3>
            <p>Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА.  ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.</p>

            <p>Мета:</p>
            <p>⎯	придбати практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок</p>
            <p>⎯	придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX</p>   
                
            <h3>Місце розташування ЛР №3</h3>
            <p>Розміщено на GitHub</p>
            <p><a href="" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
            <p><a href="https://github.com/SerAvram/WebProjecN3" target="_blank">Проект.</a> <a href="https://seravram.github.io/WebProjecN3/" target="_blank">Сайт проекту.</a></p>
            <p><a href="https://github.com/SerAvram/Lab4GV" target="_blank">Проект.</a> <a href="https://seravram.github.io/Lab4GV/" target="_blank">Сайт табличної верстки.</a></p>
            <p><a href="https://github.com/SerAvram/Lab4BV" target="_blank">Проект.</a> <a href="https://seravram.github.io/Lab4BV/" target="_blank">Сайт блокової верстки.</a></p>

            `;
            break;

        case "ЗАВДАННЯ №1 Зовнішній вигляд макету. Код макету":
            contentHTML = `
                <h3>ЗАВДАННЯ №1 Зовнішній вигляд макету. Код макету</h3>
                <p>Зовнішній вигляд макету:</p>
                <img src="lab3page.png">                   


                <p>HTML макету:</p>
                <img src="lab3html1.png">              
                <img src="lab3html2.png">                  
                <img src="lab3html3.png">                   
                              
            `;
            break;
        
        case "ЗАВДАННЯ №2":
            contentHTML = `
                <h3>ЗАВДАННЯ №2</h3>

                <p>Фіксовані і гумові табличні та блокові верстки</p>              
                                              
            `;
            break;

            case "Фіксована таблична верстка":
                contentHTML = `
                    <h3>Фіксована таблична верстка</h3>    
                    
                    <img src="fgtabl.png">                   
                    
                                  
                `;
                break;
            case "Гумова таблична верстка":
            contentHTML = `
                <h3>Гумова таблична верстка</h3>
                <img src="fgtabl.png">                   
                                              
                `;
                break;

            case "Фіксована блокова верстка":
            contentHTML = `
                <h3>Фіксована блокова верстка</h3>
                <img src="fgblock.png">                   
                                              
                `;
                break;

            case "Гумова блокова верстка":
            contentHTML = `
                <h3>Гумова блокова верстка</h3>
                <img src="fgblock.png">                       

                `;
                break;

            case "ЗАВДАННЯ №3 FLEXBOX":
            contentHTML = `
                <h3>ЗАВДАННЯ №3 FLEXBOX</h3>
                `;
                break;

            case "Зовнішній вигляд сторінки":
            contentHTML = `
                <h3>Зовнішній вигляд сторінки</h3>

                <img src="lab3page.png">   
                <img src="lab3page2.png">                 

                `;
                break;

            case "HTML-код":
            contentHTML = `
                <h3>HTML-код</h3>

                <img src="lab3html1.png">              
                <img src="lab3html2.png">                  
                <img src="lab3html3.png">    
                <img src="lab3html4.png">                  
                <img src="lab3html5.png">                
                
                `;
                break;

            case "CSS-код сторінки":
            contentHTML = `
                <h3>CSS-код сторінки</h3>

                <img src="lab3css1.png">              
                <img src="lab3css2.png">                  
                <img src="lab3css3.png">    
                <img src="lab3css4.png">                  
                <img src="lab3css5.png">                  
                
                `;
                break;

            case "ВИСНОВКИ до ЛР №3":
            contentHTML = `
                <h3>ВИСНОВКИ до ЛР №3</h3>

                <p>В ході виконання лабораторної роботи набуто практичних навичок роботи  
                верстки сторінок засобами CSS.</p>
                
                `;
                break;

                
            case "Тема, мета ЛР №4 Місце розташування сайту, звіту":
            contentHTML = `
                <h3>Тема, мета ЛР №4. Місце розташування сайту, звіту</h3>
                <p>Тема: АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST.</p>

                <p>Мета: Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First.</p>

                <h3>Місце розташування ЛР №4</h3>
                <p>Розміщено на GitHub</p>
                <p><a href="" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://github.com/SerAvram/WebProjectN4" target="_blank">Проект.</a> <a href="https://seravram.github.io/WebProjectN4/" target="_blank">Сайт проекту.</a></p>
                        
                `;
                break;
           
            case "ЗАВДАННЯ №1 Визначення брейкпоінтів":
            contentHTML = `
                <h3>ЗАВДАННЯ №1 Визначення брейкпоінтів</h3>
        
                <p>Брейкпоінти в контексті веб-дизайну визначають різні розміри екрану, на яких змінюється вигляд і розміщення елементів веб-сайту, 
                    щоб забезпечити оптимальний вигляд і користування на різних пристроях, таких як комп'ютери, планшети та смартфони.
                    Основна мета брейкпоінтів - забезпечити адаптивну верстку, яка забезпечує оптимальний вигляд і функціональність сайту 
                    на будь-якому розмірі екрану. Використання брейкпоінтів дозволяє розробникам створювати веб-сайти, які адаптуються до різних 
                    розмірів екрану без необхідності створення окремих версій для кожного пристрою.</p>
                <p>Визначені брейкпоінти: до 500, більше 500 і до 1000 та більше 1000.</p>
                        
                `;
                break;
        
                        
            case "ЗАВДАННЯ №2 Виконання адаптивної верстки":
            contentHTML = `
                <h3>ЗАВДАННЯ №2 Виконання адаптивної верстки</h3>
                
                <p>Результати виконання адаптивної верстки:</p>

                <br>
                <p>1) Десктопна версія (ширина від 1001 рх)</p>
                <img src="descktop1.png">   
                <img src="descktop2.png">   
                <br>
                
                <p>2) Планшетна версія (ширина від 501 до 1000 рх)</p>
                <img src="plan1.png">
                <img src="plan2.png">  
                
                <br>
                <p>3) Версія під мобільний телефон (ширина до 500 рх)</p>
                <img src="phone1.png">   
                <img src="phone2.png">  
                <br>

                <br>
                <p>Css текст файлу стилів - медіазапити:</p>
                <img src="media1.png">   
                <img src="media2.png">  
                <br>


    
                                
                `;
                break;
                        
                        
            case "ЗАВДАННЯ №3 Пояснення створених версій":
            contentHTML = `
                <h3>ЗАВДАННЯ №3 Пояснення створених версій</h3>
                <p>Десктопна версія:
                Ця версія призначена для екранів пк та ноутбуків.
                Містить повний зміст та деталізацію елементів.</p
                <p>Планшетна версія:
                Оптимізована для планшетів та деяких мобільних пристроїв у горизонтальному режимі.
                Може бути менш габаритною, зі зменшеною кількістю контенту на екрані, щоб полегшити навігацію та покращити 
                відображення на пристроях із середніми екранами.</p
                <p>Мобільна версія:
                Призначена для смартфонів.
                Має компактну структуру та обмежену кількість контенту на екрані, щоб забезпечити зручне відображення 
                та навігацію на малих пристроях.</p>
                                
                `;
                break;
                
                    
            case "ВИСНОВКИ до ЛР №4":
            contentHTML = `
                <h3>ВИСНОВКИ до ЛР №4</h3>
                        
                <p>В ході виконання лабораторної роботи набуто практичних навичок застосування адаптивної верстки з використанням медіа-запитів.</p>
                                        
                `;
                break;
                            
                
        default:
            contentHTML = "<p>Тут має відображатися зміст вибраного пункту меню.</p>";
            break;
    }

    // Виведення змісту відповідного пункту меню в блок
    document.getElementById("lab-content").innerHTML = contentHTML;
}