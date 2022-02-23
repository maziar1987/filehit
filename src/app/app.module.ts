import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './productservice';
import { FormsModule } from '@angular/forms';
import { FstProjectComponent } from './fst-project/fst-project.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShiftComponent } from './shift/shift.component';

import { DropdownModule } from 'primeng/dropdown';
import { OrderListModule } from 'primeng/orderlist';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    AppComponent,
    FstProjectComponent,
    HomeComponent,
    PageNotFoundComponent,
    ShiftComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    DropdownModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OrderListModule,
    HttpClientModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    ProgressBarModule,
    InputTextModule,
    DialogModule,
    ContextMenuModule,
    MultiSelectModule,
    SliderModule,
    DynamicDialogModule,
    MenuModule,
    TooltipModule,
    InputTextareaModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
