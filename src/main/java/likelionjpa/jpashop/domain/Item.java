package likelionjpa.jpashop.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)   //상속 매핑 전략을 지정하는 어노테이션. 모든 하위 엔티티를 하나의 테이블에 저장.
@DiscriminatorColumn(name = "dtype")    //단일 데이틀 전략에서 사용되는 구분 컬럼을 지정
public abstract class Item {
    @Id
    @GeneratedValue
    @Column(name = "item_id")
    private Long id;

    private String name;
    private int price;
    private int stockQuantity;
}
