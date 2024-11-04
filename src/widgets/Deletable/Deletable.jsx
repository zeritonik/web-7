// Импорт базового класса для компонент
import { Component } from 'react'

// Подуключение style.css
import "./style.css";

// Виджет, который мы используем для добавления функционала удаления страницы
export class Deletable extends Component {
    render() {
        return (
            <div className='deletable'>
                {/* // Отрисовываем дочерние JSX-компоненты, которые сюда передаются через props.children */}
                {this.props.children}
                <button className='delete-btn' onClick={() => { this.props.deleteHandler(this.props.id) }}>Удалить</button>
            </div>
        );
    }
}