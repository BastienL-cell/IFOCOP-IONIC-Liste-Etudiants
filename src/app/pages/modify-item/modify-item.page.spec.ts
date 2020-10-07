import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifyItemPage } from './modify-item.page';

describe('ModifyItemPage', () => {
  let component: ModifyItemPage;
  let fixture: ComponentFixture<ModifyItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifyItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
