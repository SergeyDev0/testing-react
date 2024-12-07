export const QUESTIONS = [
    {   
        'id': 1,
        'question': 'Что такое операционная система?',
        'options': [
            {"id": "q11", "name": 1, "value": 'Это просто программа на компьютере, как и другие - Word или Chrome',  "isCorrect": false},
            {"id": "q12", "name": 1, "value": 'Это показатель того, какой процессор используется на компьютере. Например, 32-битный или 64-битный',  "isCorrect": false},
            {"id": "q13", "name": 1, "value": 'Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем', "isCorrect": true},
            {"id": "q14", "name": 1, "value": 'Нет такого понятия, есть понятие "файловая система"', "isCorrect": false},
        ],
    },
    {
        'id': 2,
        'question': 'Является ли Android операционной системой?',
        'options': [
            {"id": "q21", "name": 2, "value": 'Да, это такая же ОС, как и другие, просто для мобильных девайсов', "isCorrect": true },
            {"id": "q22", "name": 2, "value": 'Нет, операционные системы бывают только для ПК', "isCorrect": false },
            {"id": "q23", "name": 2, "value": 'Нет, Android это программа, которая ставится на операционную систему девайса. ОС на разных девайсах разные', "isCorrect": false },
            {"id": "q24", "name": 2, "value": 'Это домашняя страничка в настройках вашего браузера', "isCorrect": false },
        ],
    },
    {
        'id': 3,
        'question': 'Что такое процессор компьютера?',
        'options': [
            {"id": 1, "name": 3, "value": 'Это блок, внутри которого находится дисковод и много разъемов для монитора, клавиатуры и компьютерной мышки', "isCorrect": false },
            {"id": 2, "name": 3, "value": 'Это общее название всех комплектующих компьютера', "isCorrect": false },
            {"id": 3, "name": 3, "value": 'Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других', "isCorrect": true },
            {"id": 4, "name": 3, "value": 'Это суммарный показатель вычислительной мощности компьютера, например 2,7 ГГц', "isCorrect": false },
        ],
    },
    {
        'id': 4,
        'question': 'Какие бывают разрядности у современных процессоров?',
        'options': [
            {"id": "q41", "name": 4, "value": '32 и 64 бита', "isCorrect": true },
            {"id": "q42", "name": 4, "value": '12 и 32 бита', "isCorrect": false },
            {"id": "q43", "name": 4, "value": '15 и 32 бита', "isCorrect": false },
            {"id": "q44", "name": 4, "value": '86 и 64 бита', "isCorrect": false },
        ],
    },
    {
        'id': 5,
        'question': 'Какой тип процессора чаще всего используют мобильные девайсы?',
        'options': [
            {"id": "q51", "name": 5, "value": 'iOS использует Intel, остальные используют AMD', "isCorrect": false },
            {"id": "q52", "name": 5, "value": 'Чаще всего используют Intel', "isCorrect": false },
            {"id": "q53", "name": 5, "value": 'Чаще всего используют AMD', "isCorrect": false },
            {"id": "q54", "name": 5, "value": 'Чаще всего используют ARM', "isCorrect": true },
        ],
    },
    {
        'id': 6,
        'question': 'Для чего компьютеру нужна RAM?',
        'options': [
            {"id": "q61", "name": 6, "value": 'Для быстрого доступа к данным', "isCorrect": true },
            {"id": "q62", "name": 6, "value": 'Для долгосрочного хранения данных', "isCorrect": false },
            {"id": "q63", "name": 6, "value": 'Для правильной фрагментации памяти', "isCorrect": false },
            {"id": "q64", "name": 6, "value": 'Для дефрагментации данных', "isCorrect": false },
        ],
    },
    {
        'id': 7,
        'question': 'Чем отличается HDD от SSD?',
        'options': [
            {"id": "q71", "name": 7, "value": 'HDD - это твердотельный накопитель без подвижных частей. Более дешевый, чем SSD. HDD работает быстрее', "isCorrect": false},
            {"id": "q72", "name": 7, "value": 'HDD - это твердотельный накопитель без подвижных частей. Более дорогой, чем SSD. HDD работает быстрее', "isCorrect": false},
            {"id": "q73", "name": 7, "value": 'SSD - это твердотельный накопитель без подвижных частей. Более дешевый, чем HDD. SSD работает быстрее', "isCorrect": false},
            {"id": "q74", "name": 7, "value": 'SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее', "isCorrect": true},
        ],
    },
    {
        'id': 8,
        'question': 'Как отличаются между собой USB?',
        'options': [
            {"id": "q81", "name": 8, "value": 'Бывают только USB 2.0 и 3.2', "isCorrect": false},
            {"id": "q82", "name": 8, "value": 'Бывают только micro-USB и mini-USB', "isCorrect": false},
            {"id": "q83", "name": 8, "value": 'USB отличаются по пропускной способности (micro-USB, mini-USB, lightning и т.д.) и форме (USB 2.0, USB 3.2)', "isCorrect": false},
            {"id": "q84", "name": 8, "value": 'USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2)', "isCorrect": true},
        ],
    },
    {
        'id': 9,
        'question': 'Какой файловой системы не существует?',
        'options': [
            {"id": "q91", "name": 9, "value": 'Fat', "isCorrect": false},
            {"id": "q92", "name": 9, "value": 'NTFS', "isCorrect": false},
            {"id": "q93", "name": 9, "value": 'APFS', "isCorrect": false},
            {"id": "q94", "name": 9, "value": 'BolSFS', "isCorrect": true},
        ],
    },
]