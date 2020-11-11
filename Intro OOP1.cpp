/**
    [PROGRAM] :  Object Oriented Programming
    [AUTHOR]  :  Saddam Arbaa
    [Email]   :  <saddamarbaas@gmail.com>

  Object Oriented Programming with C++ - Introduction
*/

#include<iostream>
using namespace std;

// Create Rectangle class with some attributes

class Rectangle {

    // Access specifier
    public:

        // Attributes
        float length, width;

        // Constructor with parameters
        Rectangle(float len, float wid)
        {
            length = len;
            width = wid;
        }

    // Access specifier(public member function )
    public:
        // function to set length of Rectangle
        void setLength(float length)
        {
           if(length >= 0)
           length = length;
           else
           cout << "Please Enter only positive values" << endl;
         }

        // function to set width of Rectangle
        void setWidth(float width)
        {
            if(width >= 0)
            width = width;
            else
            cout << "Please Enter only positive values" << endl;
        }

        // function to get(Return) length of Rectangle
        float getLenght()
        {
            return length;
        }

        // function to get(Return) width of Rectangle
        float getWidth()
        {
            return width;
        }

        // function to get(Return) Area of Rectangle
        float getArea()
        {
            return length * width;
        }

      // function to display the Area of Rectangle
       void display()
       {
          cout << "Area of rectangle is : " << length * width <<endl;
       }
};


int main()
{
    // Create an object of a Rectangle
    Rectangle box1(40.5, 30);

    // Print values
    cout << "the length " << box1.getLenght() << endl;
    cout << "the width " << box1.getWidth() << endl;
    // Print the area
    box1.display();

    // Create another object of a Rectangle
    Rectangle box2(12.5, 12.5);
    // Print values
    cout << "the length " << box2.getLenght() << endl;
    cout << "the width " << box2.getWidth() << endl;
    // Print the area
    box2.display();

  return 0;
}


