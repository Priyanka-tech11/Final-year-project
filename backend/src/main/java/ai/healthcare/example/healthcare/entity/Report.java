package ai.healthcare.example.healthcare.entity;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "reports")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user_id")
    private int userId;

    private String name;
    private String disease;
    private String precautions;

    @Column(name = "created_at")
    private Timestamp createdAt;

    // getters & setters
}