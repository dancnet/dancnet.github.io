const updated = moment('2024-08-04');

const init = () => {
    fetch_page();
    set_uptated_time();
    window.addEventListener('hashchange', () => {
        fetch_page();
    });
}

const fetch_page = () => {
    let file = window.location.hash.substring(1);
    if (file === '') file = 'index';
    fetch(`/pages/${file}.md`)
    .then(response => response.text())
    .then(content => {
        document.getElementById('content').innerHTML = marked.parse(content);
        window.scrollTo(0, 0);
    });
}

const set_uptated_time = () => {
    document.getElementById('updated').innerHTML = updated.from(moment());
}

init();