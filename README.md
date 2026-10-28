# AI Study Planner
### Final Capstone Project Proposal and Prototype

> **Tagline:** Plan Smarter. Study Better. Achieve More.

**Project type:**Mehejabin Jannat Mourin  
**Student ID:** IT-24062  
**Course:** Software Engineering and Project Management(ICT-31007) 
**Instructor:** Prof.Dr Ziaur Rahman
**Institution:** Mawlana Bhashani Science and Technology
**Proposal date:** 27.10.26 

---

## 1. Executive Summary

AI Study Planner is a web-based study management application designed to help students organize subjects, syllabus topics, exam dates, and available study time in one place. It creates a personalized study schedule, tracks completed tasks, reminds students to revise topics, and provides recommendations based on urgency, difficulty, and progress.

The first version will use a transparent rule-based scheduling engine so that the project can be implemented and tested without depending on a paid AI service. An optional AI API can be integrated later to generate natural-language study tips. The system will use HTML, CSS, and JavaScript for the user interface, Java Servlets for server-side logic, and MySQL for persistent data storage.

The project will follow the **Incremental Software Development Model**. Core functions will be developed in small, testable increments, beginning with the interface and study data, then adding scheduling, progress tracking, and recommendations.

## 2. Introduction and Background

Students often have multiple subjects, different exam dates, large syllabuses, and limited daily study time. When study planning is done manually, students may spend too much time on easy topics, forget revision, or fail to give enough attention to difficult subjects.

AI Study Planner aims to provide a structured and practical way to plan study sessions and monitor progress. The application is intended for individual students and is suitable for a capstone project because it combines user interface design, object-oriented programming, database design, software process planning, and system modelling.

## 3. Problem Statement

Many students organize their study schedules using paper notes, basic calendars, or separate applications. These methods may not consider topic difficulty, time remaining before an exam, estimated topic duration, and completed work together. As a result, study plans can become unrealistic and progress can be difficult to measure.

The proposed system will bring these activities into one application and help students create a manageable, adjustable study plan.

## 4. Project Aim and Objectives

### 4.1 Main Aim

To design and prototype a web-based study planner that helps students create personalized study schedules and track academic preparation.

### 4.2 Specific Objectives

1. Allow students to create an account and manage their profile.
2. Allow students to add subjects, syllabus topics, topic difficulty, and estimated study duration.
3. Store exam dates and daily available study time.
4. Generate a suggested schedule based on urgency, difficulty, and available time.
5. Allow students to mark sessions as completed and view progress.
6. Provide revision suggestions and an exam countdown.
7. Provide a Pomodoro-style study timer.
8. Use a relational database to store users, subjects, topics, sessions, and progress.
9. Build a responsive interface that works on desktop and mobile screens.
10. Document the system with UML and data-flow diagrams and test the main use cases.

## 5. Proposed Solution

The application will ask a student to enter their subjects, topics, exam dates, difficulty levels, estimated topic durations, and available study hours. The scheduling engine will prioritize topics using simple, explainable rules.

For example, a topic may receive higher priority when its exam is closer, its difficulty is high, or it has not yet been completed. The system will then allocate study sessions within the student's available daily time. Students can edit the suggested plan when their circumstances change.

**Example scenario:** A student has Java, Computer Networking, and Microprocessor exams in ten days and can study three hours per day. The student marks Microprocessor as difficult. The planner assigns more time to Microprocessor while reserving time for the other subjects and revision.

## 6. Scope

### 6.1 Included in the Initial Version

- Student registration and login (backend implementation planned)
- Dashboard showing subjects, tasks, and progress
- Subject and topic management
- Exam date and available-time input
- Rule-based study schedule generation
- Daily task completion tracking
- Exam countdown and revision suggestions
- Pomodoro timer
- Responsive web interface
- MySQL database and Java Servlet backend design
- Testing, documentation, and GitHub version control

### 6.2 Outside the Initial Version

- Automatic access to university learning-management systems
- Automatic import of syllabuses from PDFs
- Mobile applications for Android and iOS
- Paid subscription features
- Guaranteed prediction of exam questions or academic results
- Advanced machine-learning model training

An external AI API is an optional enhancement. The core schedule generator will work without it.

## 7. Stakeholders and Users

| Stakeholder | Interest / Responsibility |
|---|---|
| Student | Enters subjects and study availability; follows and updates the plan |
| Project developer | Designs, implements, tests, and documents the system |
| Instructor / evaluator | Reviews proposal, diagrams, implementation, and demonstration |
| Administrator (future extension) | Manages system-level configuration and support |

## 8. Functional Requirements

| ID | Requirement |
|---|---|
| FR-01 | The system shall allow a student to register and log in. |
| FR-02 | The system shall allow a student to create, edit, and delete subjects. |
| FR-03 | The system shall allow topics to be added to each subject. |
| FR-04 | The system shall store exam dates, difficulty levels, and estimated study time. |
| FR-05 | The system shall accept the student's available study time per day. |
| FR-06 | The system shall generate a suggested schedule using priority rules. |
| FR-07 | The system shall allow students to mark study sessions as completed. |
| FR-08 | The system shall display completed and remaining tasks. |
| FR-09 | The system shall display exam countdowns and revision suggestions. |
| FR-10 | The system shall provide a start, pause, and reset study timer. |
| FR-11 | The system shall save student and study-plan data in a database. |
| FR-12 | The system shall validate input and show understandable error messages. |

## 9. Non-Functional Requirements

- **Usability:** Common tasks should be understandable without special training.
- **Performance:** Typical dashboard and schedule operations should respond within a reasonable time under normal student-project testing conditions.
- **Reliability:** Invalid data should not be saved; completed tasks should remain completed after refresh when connected to the backend.
- **Security:** Passwords must be hashed on the server; database credentials and API keys must not be committed to GitHub.
- **Privacy:** Only data needed for planning should be collected.
- **Maintainability:** Code should be separated into presentation, business logic, and data-access layers.
- **Portability:** The front end should work in modern browsers and adapt to different screen sizes.
- **Accessibility:** Use labels, keyboard-operable controls, readable contrast, and meaningful messages.

## 10. Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Responsive layout and visual styling |
| JavaScript | Client-side interactions and prototype schedule logic |
| Java | Object-oriented business logic |
| Java Servlet / JSP | Server-side request handling and web integration |
| MySQL | Persistent relational data storage |
| JDBC | Communication between Java and MySQL |
| Git and GitHub | Version control, source hosting, and submission |
| Optional AI API | Natural-language study recommendations in a later increment |

**Implementation note:** The included prototype is a front-end demonstration and stores sample interactions in the browser only. It is not a production application and does not yet provide real authentication or persistent MySQL storage. These are planned backend tasks.

## 11. Software Process Model

The project will use the **Incremental Model**. Each increment adds a usable set of features and is reviewed before the next increment begins.

### Why this model?

- The project can be developed in manageable stages.
- The interface can be demonstrated before the full backend is ready.
- Feedback can be incorporated after each increment.
- Each feature can be tested separately.
- Optional AI integration can be postponed without blocking the core application.

### Development increments

1. **Increment 1 — Requirements and design:** finalize requirements, use cases, data model, and wireframe.
2. **Increment 2 — Front-end prototype:** build the dashboard and interactive sample study plan.
3. **Increment 3 — Core backend:** implement Java Servlet endpoints, validation, and database connection.
4. **Increment 4 — Planning and progress:** implement schedule generation, task completion, countdown, and timer.
5. **Increment 5 — Testing and refinement:** test use cases, fix defects, and improve responsiveness.
6. **Increment 6 — Delivery:** complete documentation, screenshots, final demonstration, and GitHub submission.

## 12. Schedule, Milestones, and Deliverables

The following is a proposed six-week plan. Adjust the dates to match the actual course deadline.

| Week | Activities | Milestone | Deliverable |
|---|---|---|---|
| 1 | Define problem, objectives, scope, and requirements | M1: Proposal approved | Proposal and requirements list |
| 2 | Create DFD, Use Case, Activity, ER, Class, and Object diagrams | M2: Design completed | UML/design documentation |
| 3 | Build dashboard and front-end interactions | M3: Prototype ready | HTML/CSS/JS prototype |
| 4 | Implement Java classes, Servlets, JDBC, and MySQL schema | M4: Core backend ready | Backend and database scripts |
| 5 | Implement schedule generation, progress tracking, and timer; test features | M5: Feature-complete build | Tested application |
| 6 | Fix defects, write README, capture screenshots, prepare demo | M6: Final submission | GitHub repository and demo |

### Gantt Chart

```mermaid
gantt
    title AI Study Planner — Proposed Six-Week Schedule
    dateFormat YYYY-MM-DD
    axisFormat %d %b
    section Planning
    Requirements and proposal       :a1, 2026-11-02, 7d
    section Design
    UML and database design         :a2, after a1, 7d
    section Implementation
    Front-end prototype             :a3, after a2, 7d
    Java Servlet and MySQL backend  :a4, after a3, 7d
    Schedule and progress features  :a5, after a4, 7d
    section Verification
    Testing and refinements         :a6, after a5, 4d
    Documentation and submission    :a7, after a6, 3d
```

**Planning assumption:** The Gantt chart starts on 2 November 2026. Change the start date and durations if your instructor has given a different schedule.

## 13. System Architecture

```mermaid
flowchart TD
    A[Student / Browser] --> B[HTML CSS JavaScript Interface]
    B -->|HTTP request| C[Java Servlet Controller]
    C --> D[Business Logic Classes]
    D --> E[Schedule Generator]
    D --> F[Progress and Timer Services]
    D --> G[JDBC Data Access Layer]
    G --> H[(MySQL Database)]
    E --> D
    D -->|HTTP response| C
    C --> B
    I[Optional AI API] -. Later enhancement .-> D
```

The browser presents forms and dashboards. Java Servlets handle requests and call the business logic. JDBC is used to access MySQL. The optional AI service is not required for the core scheduling function.

## 14. Data Flow Diagram (DFD)

### 14.1 Context Diagram (Level 0)

```mermaid
flowchart LR
    S[Student] -->|Profile, subjects, topics, exam dates, availability| P((AI Study Planner))
    P -->|Schedule, recommendations, progress, countdown| S
    P <-->|Optional prompt and study tips| AI[External AI Service]
```

### 14.2 Level 1 DFD

```mermaid
flowchart TD
    S[Student]
    P1((1. Manage Account))
    P2((2. Manage Study Data))
    P3((3. Generate Study Plan))
    P4((4. Track Progress))
    D1[(D1 User Data)]
    D2[(D2 Subjects and Topics)]
    D3[(D3 Study Sessions)]
    D4[(D4 Progress Records)]

    S -->|Registration / login| P1
    P1 <--> D1
    S -->|Subject, topic, exam, availability| P2
    P2 <--> D2
    P2 -->|Study data| P3
    P3 <--> D3
    P3 -->|Suggested plan| S
    S -->|Completion status| P4
    P4 <--> D3
    P4 <--> D4
    P4 -->|Progress summary| S
```

## 15. Use Case Diagram

```mermaid
flowchart LR
    Student([Student])
    UC1([Register / Log in])
    UC2([Manage Subjects])
    UC3([Manage Topics])
    UC4([Set Exam Dates and Availability])
    UC5([Generate Study Plan])
    UC6([View Dashboard and Countdown])
    UC7([Complete Study Session])
    UC8([View Progress])
    UC9([Use Pomodoro Timer])
    UC10([View Revision Suggestions])

    Student --- UC1
    Student --- UC2
    Student --- UC3
    Student --- UC4
    Student --- UC5
    Student --- UC6
    Student --- UC7
    Student --- UC8
    Student --- UC9
    Student --- UC10
```

### Main use-case description: Generate Study Plan

- **Primary actor:** Student
- **Preconditions:** Student has entered at least one subject or topic, exam date, and available study time.
- **Main flow:** Student requests a plan; the system validates the input; calculates topic priorities; allocates sessions to available time slots; saves the plan; displays the schedule.
- **Alternative flow:** If required information is missing or the available time is insufficient, the system explains the issue and asks the student to update the input.
- **Postcondition:** A suggested schedule is displayed and, in the completed backend, stored for the student.

## 16. Activity Diagram

```mermaid
flowchart TD
    A([Start]) --> B[Log in]
    B --> C[Enter subjects and topics]
    C --> D[Set exam dates and available hours]
    D --> E{Is the input valid?}
    E -- No --> F[Show validation message]
    F --> C
    E -- Yes --> G[Calculate topic priorities]
    G --> H[Allocate sessions to available time]
    H --> I{Can all work fit?}
    I -- No --> J[Show overload warning and suggested adjustments]
    J --> K[Review or edit plan]
    I -- Yes --> L[Save and display plan]
    K --> G
    L --> M[Study and mark tasks complete]
    M --> N[Update progress and revision suggestions]
    N --> O([End])
```

## 17. Entity Relationship Diagram (ERD)

```mermaid
erDiagram
    USER ||--o{ SUBJECT : owns
    SUBJECT ||--o{ TOPIC : contains
    USER ||--o{ STUDY_SESSION : schedules
    TOPIC ||--o{ STUDY_SESSION : appears_in
    USER ||--o{ PROGRESS_RECORD : records
    STUDY_SESSION ||--o| PROGRESS_RECORD : has

    USER {
        int user_id PK
        string full_name
        string email UK
        string password_hash
        datetime created_at
    }
    SUBJECT {
        int subject_id PK
        int user_id FK
        string subject_name
        date exam_date
        int priority
    }
    TOPIC {
        int topic_id PK
        int subject_id FK
        string topic_name
        int difficulty
        int estimated_minutes
        string status
    }
    STUDY_SESSION {
        int session_id PK
        int user_id FK
        int topic_id FK
        datetime planned_start
        int duration_minutes
        string session_type
        string status
    }
    PROGRESS_RECORD {
        int progress_id PK
        int user_id FK
        int session_id FK
        datetime completed_at
        string notes
    }
```

### Entity descriptions

- **User:** student account and profile.
- **Subject:** a course or subject with an exam date.
- **Topic:** a syllabus unit belonging to a subject.
- **StudySession:** a planned learning or revision session.
- **ProgressRecord:** records completion of a study session.

## 18. Class Diagram

The initial object-oriented design contains more than five classes. The front-end prototype demonstrates the main planning interaction; the following classes define the intended Java/backend structure.

```mermaid
classDiagram
    class User {
        -int userId
        -String fullName
        -String email
        -String passwordHash
        +login()
        +updateProfile()
    }
    class Subject {
        -int subjectId
        -String name
        -Date examDate
        -int priority
        +addTopic()
        +getDaysUntilExam()
    }
    class Topic {
        -int topicId
        -String title
        -int difficulty
        -int estimatedMinutes
        -String status
        +calculatePriority()
        +markCompleted()
    }
    class StudySession {
        -int sessionId
        -DateTime plannedStart
        -int durationMinutes
        -String sessionType
        -String status
        +start()
        +complete()
        +reschedule()
    }
    class StudyPlan {
        -int planId
        -Date createdAt
        +generate()
        +rebuild()
        +getDailyPlan()
    }
    class ScheduleGenerator {
        +calculatePriority(topic, examDate)
        +allocateSessions(topics, availableMinutes)
        +checkOverload()
    }
    class ProgressTracker {
        +recordCompletion(session)
        +calculateCompletionRate()
        +getProgressSummary()
    }
    class PomodoroTimer {
        -int workMinutes
        -int breakMinutes
        -String state
        +start()
        +pause()
        +reset()
    }
    User "1" --> "0..*" Subject : owns
    Subject "1" --> "1..*" Topic : contains
    User "1" --> "0..*" StudyPlan : creates
    StudyPlan "1" --> "0..*" StudySession : includes
    Topic "1" --> "0..*" StudySession : planned for
    StudyPlan --> ScheduleGenerator : uses
    StudyPlan --> ProgressTracker : uses
    StudySession --> ProgressTracker : completion data
    User --> PomodoroTimer : uses
```

## 19. Object Diagram

The following object diagram illustrates a possible snapshot of the system for one student. The names and values are sample data.

```mermaid
flowchart LR
    U["user1:User<br/>name = Mourin<br/>email = student@example.com"]
    S1["subject1:Subject<br/>name = Java<br/>examDate = 2026-11-12"]
    T1["topic1:Topic<br/>title = OOP concepts<br/>difficulty = 4<br/>status = Pending"]
    P1["plan1:StudyPlan<br/>planId = 101"]
    SS1["session1:StudySession<br/>duration = 45 min<br/>type = Study<br/>status = Planned"]
    U --> S1
    U --> P1
    S1 --> T1
    P1 --> SS1
    T1 --> SS1
```

## 20. Study Schedule Generation Logic

The first version will use a rule-based algorithm that is explainable and easy to test.

### Inputs

- Days remaining until the exam
- Topic difficulty (1–5)
- Estimated minutes for each topic
- Topic completion status
- Daily available study minutes

### Proposed priority rule

A topic receives a higher priority when the exam is closer, the topic is more difficult, or the topic remains incomplete. A possible normalized score is:

`Priority Score = 0.45 × Urgency + 0.35 × Difficulty + 0.20 × Incompletion`

Each factor is normalized to a scale from 0 to 1. Urgency increases as the exam approaches; difficulty is based on the student's 1–5 rating; incompletion is 1 for an unfinished topic and 0 for a completed topic. This formula is a starting design and may be tuned during testing.

### Allocation steps

1. Validate that exam dates are in the future or explicitly flagged as past.
2. Exclude completed topics from new study allocations unless revision is requested.
3. Calculate each remaining topic's priority score.
4. Sort topics from highest to lowest priority.
5. Allocate sessions without exceeding the daily time budget.
6. Reserve time for revision before each exam where possible.
7. Warn the student if the available time is not enough to cover all topics.

The schedule is a recommendation, not a guarantee of exam performance.

## 21. Prototype Interface

The `prototype/` folder contains a responsive HTML/CSS/JavaScript dashboard that demonstrates:

- Sample dashboard statistics
- Subject cards and exam countdowns
- A sample daily study plan
- Task completion interaction and progress updates
- A working start/pause/reset Pomodoro timer
- A form for adding a study task

The prototype uses sample data and browser-side state. The Java Servlet and MySQL integration will be implemented in a later increment.

## 22. Testing Plan

| Test ID | Test case | Expected result |
|---|---|---|
| TC-01 | Add a subject with a valid name and future exam date | Subject appears in the dashboard |
| TC-02 | Submit an empty topic form | Validation message is displayed |
| TC-03 | Enter an invalid duration such as zero minutes | Input is rejected or corrected |
| TC-04 | Generate a plan with available study hours | Sessions fit within the daily limit |
| TC-05 | Mark a session as completed | Completed count and progress update |
| TC-06 | Start, pause, and reset the timer | Timer responds to each control |
| TC-07 | Open the interface on a narrow screen | Layout adapts without horizontal overflow |
| TC-08 | Attempt login with incorrect credentials (backend phase) | Access is denied with a safe error message |
| TC-09 | Reload after saving a task (backend phase) | Persisted data is retrieved from MySQL |
| TC-10 | Try to save invalid or missing required fields | Server-side validation prevents saving |

## 23. Risks and Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| Limited development time | Some advanced features may be unfinished | Prioritize core planning and progress features |
| AI API cost or service limits | AI recommendations may be unavailable | Keep the rule-based planner as the default |
| Incorrect or unrealistic schedule | Student may receive an overloaded plan | Enforce daily limits and show overload warnings |
| Database integration issues | Data may not save correctly | Test JDBC and database operations separately |
| Exposure of credentials | Security and repository risk | Use environment variables and never commit secrets |
| Scope expansion | Delivery may be delayed | Treat PDF import and advanced AI as future work |

## 24. Security and Privacy Considerations

- Store password hashes, never plain-text passwords.
- Validate inputs on both the client and server.
- Use prepared statements with JDBC to reduce SQL injection risk.
- Keep database credentials and AI API keys outside source control.
- Do not collect unnecessary personal information.
- Do not send private student information to an external AI service unless it is necessary and the student has been informed.
- Use HTTPS when deploying the backend publicly.

## 25. Expected Outcomes

At completion, the project is expected to provide:

1. A responsive student dashboard.
2. A structured way to manage subjects and syllabus topics.
3. A rule-based personalized study schedule.
4. Study session completion and progress tracking.
5. Exam countdown and revision support.
6. A Pomodoro timer.
7. A Java-oriented object model and MySQL database design.
8. Six system diagrams and a documented development schedule.
9. A GitHub repository containing source code, proposal, setup instructions, and screenshots.

## 26. Future Enhancements

- AI-generated study tips using an external API
- Calendar export and reminder notifications
- Syllabus import from PDF files
- Weekly progress reports and visual analytics
- Spaced-repetition recommendations
- Multi-language interface
- Mobile-friendly progressive web app
- Optional integration with university calendars

## 27. Proposed GitHub Repository Structure

```text
ai-study-planner/
├── README.md
├── docs/
│   ├── proposal.md
│   ├── diagrams/
│   └── screenshots/
├── prototype/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── src/
│   └── java/
│       ├── model/
│       ├── service/
│       ├── dao/
│       └── servlet/
├── database/
│   └── schema.sql
├── tests/
└── .gitignore
```

The `src/` and `database/` folders are the planned backend implementation structure and may be added as development progresses.

## 28. How to Publish and Submit

1. Create a new **public GitHub repository** named `ai-study-planner`.
2. Upload `README.md` and the `prototype/` folder.
3. Replace all placeholders (name, student ID, course, instructor, institution, and date).
4. Update the schedule if your course uses different dates.
5. Open `prototype/index.html` locally to check the demonstration.
6. Add screenshots to `docs/screenshots/` and link them from the README if desired.
7. Commit and push your final changes.
8. Submit the repository URL in your course submission page.

Example commands:

```bash
git init
git add .
git commit -m "Add AI Study Planner capstone proposal and prototype"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ai-study-planner.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username and create the remote repository before pushing.

## 29. Conclusion

AI Study Planner addresses a common student challenge: turning a large syllabus and limited study time into a realistic plan. The proposed system combines study-data management, explainable schedule generation, progress tracking, and revision support in one web application. By using an incremental development process, the project can deliver a working prototype early and add backend capabilities in stages. The proposal, diagrams, and prototype provide a foundation for implementation, testing, demonstration, and future enhancement.

---

## Academic Integrity Note

This document is a proposal and starting point. Before submission, personalize the project details, verify that the schedule matches your course, review each diagram, and make sure you can explain the design and demonstrate the prototype yourself.
