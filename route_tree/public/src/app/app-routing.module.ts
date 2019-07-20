import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductBrandComponent } from './product-brand/product-brand.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ReviewComponent } from './review/review.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { AuthorComponent } from './author/author.component';
import  {AllreviewsComponent } from './allreviews/allreviews.component';

const routes: Routes = [
  {path: 'products',component:ProductComponent,children:[
    {path:'details/:id',component:ProductDetailComponent},
    {path:'brand/:brand',component:ProductBrandComponent},
    {path:'category/:cat',component:ProductCategoryComponent}
  ]},
  {path:'reviews',component:ReviewComponent,children:[
    {path:'details/:id',component:ReviewDetailComponent},
    {path:'author/:id',component:AuthorComponent},
    {path:'all/:id',component:AllreviewsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
