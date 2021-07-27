# [Simple Mondrian](https://tyouxik.github.io/simple-mondrian/)

![Mondrian_original_horizontal](https://user-images.githubusercontent.com/65331057/126967887-d043591b-43c3-4346-84c9-9d6507f4a20b.jpeg)

Mondrian are fairly easy art to reproduce using Grid, it is also a perfect exercice to refresh my knowledge and produce a page that is nice to look at.

## Responsive design

The original model was on a landscape orientation, which was particularly ugly on portrait orientation.
In portrait orientation, the design will rotate to keep harmonious proportion, as below.

![Mondrian_original_vertical](https://user-images.githubusercontent.com/65331057/126967715-631a373f-5221-46c7-b44f-95a242da9cda.jpeg)

## Planning

When planning, I planned a "frame" container which would contain all the "boxes". Each box has a number which allows to place them on the grid.

### Planning the boxes

Each box has a number, and a class based on that number (eg. box 26 has the class box-26).
The class is used to add colors to the boxes, and position them individually.

![Mondrian_box_number](https://user-images.githubusercontent.com/65331057/126968175-33c49c04-76b6-49e4-b14b-8c4f8cb26d70.jpeg)

### Planning the grid.

#### Landscape

10 rows of equal heights

14 columns with different width. Based on a unit of 1, column widths are proportional as follows:
1 | 2 |3 |4 |5 |6 |7 |8 |9 |10 |11 |12 |13 |14
---|----|---|---|---|---|---|---|---|---|---|---|---|----|
1 |0.25| 1 |0.5|0.5|1| 1 |1 |1| 0.5|0.5|1|0.25|1|

The grid is divided in 3 vertical sections:

- Section 1: columns 1 to 5
- Section 2: columns 6 to 9
- Section 3: columns 10 to 14

#### Portrait

14 rows with different width. Based on a unit of 1, column widths are proportional as follows:
1 | 2 |3 |4 |5 |6 |7 |8 |9 |10 |11 |12 |13 |14
---|----|---|---|---|---|---|---|---|---|---|---|---|----|
1 |0.25| 1 |0.5|0.5|1| 1 |1 |1| 0.5|0.5|1|0.25|1|

10 columns of equal heights

The grid is divided in 3 horizontal sections:

- Section 1: rows 1 to 5
- Section 2: rows 6 to 9
- Section 3: rows 10 to 14

Here is the visual grid that I use to plan my portrait orientation grid. The landscape orientation grid was built in the same way.
The pink vertical lines are the column lines and the brown lines are the row lines.
S2 and S3 refers to the beginning of Section 2 and Section 3.

![Mondrian_grid](https://user-images.githubusercontent.com/65331057/126970476-b2f35601-3e06-423b-a0f9-0f7bfa9e4246.jpeg)

## Final result

You can enjoy the result of this code [here](https://tyouxik.github.io/simple-mondrian/).

## Additional features

Some boxes have secrets. Click on them and discover them.
