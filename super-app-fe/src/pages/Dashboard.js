// Dashboard.js
import React from 'react';
import '../components/style/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <main className="main-content">
                <header className="header">
                    <h1 className="title">My Day</h1>
                    <p className="welcome-message">Rencanakan hari Anda dengan lebih baik!</p>
                </header>
                <section className="task-section">
                    <h2 className="section-title">Tasks for Today</h2>
                    <div className="task-card">
                        <input type="checkbox" id="task1" />
                        <label htmlFor="task1">Review project updates</label>
                    </div>
                    <div className="task-card">
                        <input type="checkbox" id="task2" />
                        <label htmlFor="task2">Prepare for the meeting</label>
                    </div>
                    <div className="task-card">
                        <input type="checkbox" id="task3" />
                        <label htmlFor="task3">Send report to the team</label>
                    </div>
                </section>
                <section className="news-portal">
                    <h2 className="section-title">Portal Berita</h2>
                    <div className="news-card">Berita 1: Update terbaru mengenai manajemen proyek.</div>
                    <div className="news-card">Berita 2: Tips untuk meningkatkan produktivitas.</div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
