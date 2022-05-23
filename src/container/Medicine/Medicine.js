import React from 'react';
import List from '../../component/List/List';



function Medicine(props) {
    const medicineData = [
        {
            id: 101,
            name: 'Abacavir',
            quantity: 25,
            price: 150,
            expiry: 2022,
            content: [
                "x", "y", "z"
            ]
        },
        {
            id: 102,
            name: 'Eltrombopag',
            quantity: 90,
            price: 550,
            expiry: 2021,
            content: [
                "a", "b", "c"
            ]
        },
        {
            id: 103,
            name: 'Meloxicam',
            quantity: 85,
            price: 450,
            expiry: 2025,
            content: [
                "m", "n", "p"
            ]
        },
        {
            id: 104,
            name: 'Allopurinol',
            quantity: 50,
            price: 600,
            expiry: 2023,
            content: [
                "a", "s", "d"
            ]
        },
        {
            id: 105,
            name: 'Phenytoin',
            quantity: 63,
            price: 250,
            expiry: 2021,
            content: [
                "e", "r", "t"
            ]
        }
    ]
    return (
        <section id="appointment" classname="appointment">
            <div classname="container">
                <div classname="section-title">
                    <h2>Medicine data</h2>
                </div>
                    <div classname="row" class="row">
                        <List data = {medicineData}/>
                    </div>
            </div>
        </section>

    );
}

export default Medicine;