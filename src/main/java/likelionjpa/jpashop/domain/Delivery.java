package likelionjpa.jpashop.domain;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "delivery")

public class Delivery {
    @Id
    @GeneratedValue
    @Column(name = "delivery_id")   //데이터베이스 테이블에서 해당 열의 이름이 delivery_id.

    private Long id;

    @Embedded       //내장 타임을 매핑.
    private Address address;

    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    @OneToOne (mappedBy = "delivery")   //일대일 관계. order 클래스의 delivery 필드에 의해 매핑됨.
    private Order order;
}
