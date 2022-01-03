import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Formik, Field, Form, FieldArray } from 'formik';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Ajouter un cour
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ textAlign: 'center' }}
          >
            Ajouter un nouveau cour
          </Typography>
          <Formik
            initialValues={{
              label: '',
              name: '',
              audios: [{ label: '', link: '' }],
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ values }) => (
              <Form
                style={{
                  width: 250,
                  padding: 8,
                  marginBottom: 6,
                  marginLeft: 23,
                }}
              >
                <div>
                  <Field
                    name="label"
                    type="text"
                    placeholder="titre du cour"
                    style={{
                      width: 250,
                      padding: 8,
                      marginBottom: 6,
                    }}
                  />
                </div>
                <div>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Nom du prêcheur"
                    style={{ width: 250, padding: 8, marginBottom: 6 }}
                  />
                </div>

                <FieldArray name="audios">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.audios.length > 0 &&
                        values.audios.map((audio, index) => (
                          <div key={index}>
                            <Field
                              name={`audios.${index}.label`}
                              type="text"
                              placeholder="Nom de l'audio"
                              style={{
                                width: 250,
                                padding: 8,
                                marginBottom: 6,
                              }}
                            />
                            <Field
                              name={`audios.${index}.link`}
                              type="file"
                              style={{
                                width: 250,
                                padding: 8,
                                marginBottom: 6,
                              }}
                            />
                          </div>
                        ))}
                    </div>
                  )}
                </FieldArray>

                <Button variant="contained" type="submit">
                  Valider
                </Button>
              </Form>
            )}
          </Formik>
          {/* <form
            style={{
              paddingTop: 62,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                placeholder="titre du cour"
                style={{ width: 250, padding: 8, marginBottom: 6 }}
                value={data}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Nom du prêcheur"
                style={{ width: 250, padding: 8, marginBottom: 6 }}
                value={name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="date"
                placeholder="date"
                style={{ width: 250, padding: 8, marginBottom: 6 }}
                value={date}
                onChange={handleChange}
              />
            </div>
            <Button variant="contained" type="submit">
              Valider
            </Button>
          </form> */}
        </Box>
      </Modal>
    </div>
  );
};
export default BasicModal;
