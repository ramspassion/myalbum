export const fetchEmployeesAlbums = () => {
    const urlEmp ='http://localhost:3000/employees', urlAlbums='http://localhost:3000/albums';
    return Promise.all([fetch(urlEmp), fetch(urlAlbums)])
        .then(([respEmp, respAlbums]) => {
            return Promise.all([respEmp.json(), respAlbums.json()])
        })
}

