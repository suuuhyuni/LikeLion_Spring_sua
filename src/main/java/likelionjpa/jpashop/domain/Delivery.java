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

    @OneToOne
    @JoinColumn(name = "order_id")
    private Order orders;

    @Embedded       //내장 타임을 매핑.
    private Address address;

    @Enumerated(EnumType.STRING)
    private DeliveryStatus status;

}
