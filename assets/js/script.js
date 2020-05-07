document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar;

    initThemeChooser({

        init: function(themeSystem) {
            calendar = new FullCalendar.Calendar(calendarEl, {
                plugins: [ 'bootstrap', 'interaction', 'dayGrid', 'timeGrid', 'list' ],
                themeSystem: themeSystem,
                locale: 'fr',
                firstDay: 1,
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                },
                defaultDate: '2020-05-06',
                weekNumbers: true,
                navLinks: true, // can click day/week names to navigate views
                editable: true,
                eventLimit: true, // allow "more" link when too many events
                events: [
                    {
                        title: 'Férié',
                        start: '2020-05-08'
                    },
                    {
                        title: 'Week-end',
                        start: '2020-05-09',
                        end: '2020-05-12'
                    },
                    {
                        groupId: 999,
                        title: 'Dev.',
                        start: '2020-05-14T08:00:00',
                        color: 'orange',
                    },
                    {
                        groupId: 999,
                        title: 'Dev.',
                        start: '2020-05-21T08:00:00',
                        color: 'orange',
                    },
                    {
                        title: 'Hello Fred',
                        start: '2020-05-11',
                        end: '2020-05-13'
                    },
                    {
                        title: 'Meeting',
                        start: '2020-05-12T10:30:00',
                        end: '2020-05-12T12:30:00'
                    },
                    {
                        title: 'Lunch',
                        start: '2020-05-12T12:00:00'
                    },
                    {
                        title: 'Meeting',
                        start: '2020-05-12T14:30:00'
                    },
                    {
                        title: 'Happy Hour',
                        start: '2020-05-12T17:30:00'
                    },
                    {
                        title: 'Dinner',
                        start: '2020-05-12T20:00:00'
                    },
                    {
                        title: 'Birthday Party',
                        start: '2020-05-13T07:00:00'
                    },
                    {
                        title: 'Redirection',
                        url: 'http://google.com/',
                        start: '2020-05-28'
                    }
                ],
                eventClick:function(event){
                    if(event.event.url){
                        event.jsEvent.preventDefault();
                        window.open(event.event.url,"_blank");
                    }
                }
            });
            calendar.render();
        },

        change: function(themeSystem) {
            calendar.setOption('themeSystem', themeSystem);
        }

    });

});